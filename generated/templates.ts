// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class SushiswapPair extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("SushiswapPair", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "SushiswapPair",
      [address.toHex()],
      context
    );
  }
}
