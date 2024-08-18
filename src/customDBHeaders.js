// Add a header to customDBHeaders if it's missing
export async function addCustomDBHeader(headerName) {
  let customDBHeaders = await messenger.LegacyPrefs.getPref("mailnews.customDBHeaders", "");
  if (!customDBHeaders.toLowerCase().includes(headerName.toLowerCase())) {
    customDBHeaders += " " + headerName;
    await messenger.LegacyPrefs.setPref("mailnews.customDBHeaders", customDBHeaders);
  }
}

// Remove a header from customDBHeaders if it's present
export async function removeCustomDBHeader(headerName) {
  let customDBHeaders = await messenger.LegacyPrefs.getPref("mailnews.customDBHeaders", "");
  let regex = new RegExp(` *${headerName}`, "i");
  customDBHeaders = customDBHeaders.replace(regex, "");
  await messenger.LegacyPrefs.setPref("mailnews.customDBHeaders", customDBHeaders);
}
