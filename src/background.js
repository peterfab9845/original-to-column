"use strict";

import { addCustomDBHeader, removeCustomDBHeader } from "./customDBHeaders.js";

// Set up customDBHeaders.
await addCustomDBHeader("X-Original-To");
await messenger.ex_runtime.onDisable.addListener(removeCustomDBHeader.bind(null, "X-Original-To"));

await messenger.OriginalToColumn.addColumn(
  "X-Original-To",
  "Sort by X-Original-To header"
);
