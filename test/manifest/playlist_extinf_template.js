window.playlist_extinf_template = '#EXTM3U\n'+
  '#EXT-X-TARGETDURATION:10\n' +
  '#EXT-X-VERSION:{{{version}}}\n' +
  '#EXT-X-MEDIA-SEQUENCE:0\n' +
  '#EXT-X-PLAYLIST-TYPE:VOD\n' +
  '{{#if extInf}}#EXTINF:{{{extInf}}}{{/if}}\n' +
  '#EXT-X-BYTERANGE:522828@0\n' +
  '{{#if segment}}{{{segment}}}\n{{/if}}' +
  '{{#if extInf1}}#EXTINF:{{{extInf1}}}{{/if}}\n' +
  '#EXT-X-BYTERANGE:587500@522828\n' +
  'hls_450k_video.ts\n' +
  '#EXTINF:10,\n' +
  '#EXT-X-BYTERANGE:713084@1110328\n' +
  'hls_450k_video.ts\n' +
  '#EXTINF:10,\n' +
  '#EXT-X-BYTERANGE:476580@1823412\n' +
  'hls_450k_video.ts\n' +
  '#EXTINF:10,\n' +
  '#EXT-X-BYTERANGE:535612@2299992\n' +
  'hls_450k_video.ts\n' +
  '#EXTINF:10,\n' +
  '#EXT-X-BYTERANGE:207176@2835604\n' +
  'hls_450k_video.ts\n' +
  '#EXTINF:10,\n' +
  '#EXT-X-BYTERANGE:455900@3042780\n' +
  'hls_450k_video.ts\n' +
  '#EXTINF:10,\n' +
  '#EXT-X-BYTERANGE:657248@3498680\n' +
  'hls_450k_video.ts\n' +
  '#EXTINF:10,\n' +
  '#EXT-X-BYTERANGE:571708@4155928\n' +
  'hls_450k_video.ts\n' +
  '#EXTINF:10,\n' +
  '#EXT-X-BYTERANGE:485040@4727636\n' +
  'hls_450k_video.ts\n' +
  '#EXTINF:10,\n' +
  '#EXT-X-BYTERANGE:709136@5212676\n' +
  'hls_450k_video.ts\n' +
  '#EXTINF:10,\n' +
  '#EXT-X-BYTERANGE:730004@5921812\n' +
  'hls_450k_video.ts\n' +
  '#EXTINF:10,\n' +
  '#EXT-X-BYTERANGE:456276@6651816\n' +
  'hls_450k_video.ts\n' +
  '#EXTINF:10,\n' +
  '#EXT-X-BYTERANGE:468684@7108092\n' +
  'hls_450k_video.ts' +
  '#EXTINF:10,\n' +
  '#EXT-X-BYTERANGE:444996@7576776\n' +
  'hls_450k_video.ts\n' +
  '#EXTINF:10,\n' +
  '#EXT-X-BYTERANGE:331444@8021772\n' +
  'hls_450k_video.ts\n' +
  '{{#if extInf2}}#EXTINF:{{{extInf2}}}{{/if}}\n' +
  '#EXT-X-BYTERANGE:44556@8353216\n' +
  'hls_450k_video.ts\n' +
  '#EXT-X-ENDLIST';
