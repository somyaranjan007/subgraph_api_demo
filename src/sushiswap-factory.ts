import { PairCreated as PairCreatedEvent } from "../generated/SushiswapFactory/SushiswapFactory"
import { PairCreated } from "../generated/schema"
import { SushiswapPair} from "../generated/templates"
export function handlePair(event: PairCreatedEvent): void {
  // let entity = new PairCreated(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.token0 = event.params.token0
  // entity.token1 = event.params.token1
  // entity.pair = event.params.pair
  // entity.param3 = event.params.param3

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()

  let pair = new PairCreated(event.transaction.hash)

  pair.token0 = event.params.token0
  pair.token1 = event.params.token1
  pair.pair = event.params.pair
  pair.param3 = event.params.param3

  pair.blockNumber = event.block.number

  pair.blockTimestamp = event.block.timestamp
  pair.transactionHash = event.transaction.hash
  pair.save()


  SushiswapPair.create(event.params.pair)
}



