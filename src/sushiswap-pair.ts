import { Swap as SwapEvent } from "../generated/templates/SushiswapPair/SushiswapPair"
import { PairCreated, Swap } from "../generated/schema"
import { SushiswapPair} from "../generated/templates"
export function handleSwap(event: SwapEvent): void {
  let swapEntity = new Swap(event.transaction.hash)
  swapEntity.sender = event.params.sender;

  swapEntity.save()
}



