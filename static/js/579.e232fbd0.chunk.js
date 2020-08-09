(this["webpackJsonp@uiw/react-baidu-map"]=this["webpackJsonp@uiw/react-baidu-map"]||[]).push([[579],{1175:function(n,o,e){"use strict";e.r(o),o.default="NavigationControl \u5e73\u79fb\u7f29\u653e\u63a7\u4ef6\n===\n\n\u8d1f\u8d23\u8fdb\u884c\u5730\u56fe\u5b9a\u4f4d\u7684\u63a7\u4ef6\uff0c\u4f7f\u7528html5\u6d4f\u89c8\u5668\u5b9a\u4f4d\u529f\u80fd\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 `Map` \u7ec4\u4ef6 `widget` \u5c5e\u6027\u6765\u8bbe\u7f6e\u63a7\u4ef6\u66f4\u65b9\u4fbf\u3002\n\n\n```jsx\nimport { GeolocationControl, useGeolocationControl } from '@uiw/react-baidu-map';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,noScroll--\x3e \n```jsx\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, GeolocationControl } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u5173\u95ed' : '\u5f00\u542f'}\n      </button>\n      <Map zoom={13}>\n        {show && (\n          <GeolocationControl\n            onLocationSuccess={(e) => {\n              let address = '';\n              address += e.addressComponent.province;\n              address += e.addressComponent.city;\n              address += e.addressComponent.district;\n              address += e.addressComponent.street;\n              address += e.addressComponent.streetNumber;\n              alert(\"\u5f53\u524d\u5b9a\u4f4d\u5730\u5740\u4e3a\uff1a\" + address);\n              console.log('address', address, e);\n            }}\n          />\n        )}\n        <GeolocationControl\n          offset={new BMap.Size(40, 40)}\n          anchor={BMAP_ANCHOR_TOP_RIGHT}\n          visiable={show}\n          onLocationSuccess={(opt) => {\n            console.log('opt', opt);\n          }}\n          onLocationError={(StatusCode) => {\n            console.log('StatusCode', StatusCode);\n          }}\n        />\n      </Map>\n    </>\n  );\n}\n\nReactDOM.render((\n  <div style={{ width: '100%', height: '300px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n), _mount_);\n```\n\x3c!--End--\x3e\n\n\n### \u4f7f\u7528 hooks\n\n`geolocationControl`, `setGeolocationControl`\n\n\x3c!--DemoStart,bgWhite--\x3e \n```jsx\nimport { useRef, useEffect, useState } from 'react';\nimport { Map, APILoader, useMap, useGeolocationControl } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const divElm = useRef(null);\n  const [show, setShow] = useState(true);\n  const { setContainer, map } = useMap();\n  const { geolocationControl } = useGeolocationControl({\n    map, anchor: BMAP_NAVIGATION_CONTROL_LARGE, visiable: show\n  });\n\n  useEffect(() => {\n    if (divElm.current && !map) {\n      setContainer(divElm.current);\n    }\n  }, [map]);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u5173\u95ed' : '\u5f00\u542f'}\n      </button>\n      <div ref={divElm} style={{ height: '100%' }} />\n    </>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '300px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| visiable | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | - |\n| anchor | \u63a7\u4ef6\u7684\u4f4d\u7f6e\u504f\u79fb\u503c\u3002| `ControlAnchor` | `BMAP_ANCHOR_TOP_RIGHT` |\n| offset | \u63a7\u4ef6\u7684\u6c34\u5e73\u504f\u79fb\u503c\u3002 | `BMap.Size` | - |\n| showAddressBar | \u662f\u5426\u663e\u793a\u5b9a\u4f4d\u4fe1\u606f\u9762\u677f\u3002\u9ed8\u8ba4\u663e\u793a\u5b9a\u4f4d\u4fe1\u606f\u9762\u677f\u3002 | `boolean` | - |\n| enableAutoLocation | \u6dfb\u52a0\u63a7\u4ef6\u65f6\u662f\u5426\u8fdb\u884c\u5b9a\u4f4d\u3002\u9ed8\u8ba4\u6dfb\u52a0\u63a7\u4ef6\u65f6\u4e0d\u8fdb\u884c\u5b9a\u4f4d\u3002 | `boolean` | - |\n| locationIcon | \u53ef\u81ea\u5b9a\u4e49\u5b9a\u4f4d\u4e2d\u5fc3\u70b9\u7684 `Icon` \u6837\u5f0f\u3002 | `Icon` | - |\n\n### \u4e8b\u4ef6\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b |\n| ----- | ----- | ----- |\n| onLocationSuccess | \u5b9a\u4f4d\u6210\u529f\u540e\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { point: BMap.Point, addressComponent: BMap.AddressComponent }) => void; |\n| onLocationError | \u5b9a\u4f4d\u5931\u8d25\u540e\u89e6\u53d1\u6b64\u4e8b\u4ef6 | (event: { statusCode: BMap.StatusCode }) => void; |\n\n### NavigationControlType\n\n| \u5e38\u91cf | \u503c | \u63cf\u8ff0 |\n| ----- | ----- | ----- |\n| BMAP_NAVIGATION_CONTROL_LARGE | `0` | \u6807\u51c6\u7684\u5e73\u79fb\u7f29\u653e\u63a7\u4ef6\uff08\u5305\u62ec\u5e73\u79fb\u3001\u7f29\u653e\u6309\u94ae\u548c\u6ed1\u5757\uff09 |\n| BMAP_NAVIGATION_CONTROL_SMALL | `1` | \u4ec5\u5305\u542b\u5e73\u79fb\u548c\u7f29\u653e\u6309\u94ae |\n| BMAP_NAVIGATION_CONTROL_PAN | `2` | \u4ec5\u5305\u542b\u5e73\u79fb\u6309\u94ae |\n| BMAP_NAVIGATION_CONTROL_ZOOM | `3` | \u4ec5\u5305\u542b\u7f29\u653e\u6309\u94ae |"}}]);
//# sourceMappingURL=579.e232fbd0.chunk.js.map