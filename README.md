# BucketCash

## Project Structure:
```
📦
├─ .gitignore
├─ BucketCash-backend
│  ├─ db
│  │  └─ database.go
│  ├─ go.mod
│  ├─ go.sum
│  ├─ handlers
│  │  ├─ auth.go
│  │  ├─ buckets.go
│  │  └─ transfers.go
│  ├─ main.go
│  ├─ middleware
│  │  └─ auth.go
│  ├─ models
│  │  └─ models.go
│  └─ utils
│     └─ jwt.go
├─ BucketCash-frontend
│  ├─ .gitignore
│  ├─ README.md
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ notes.txt
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ .env
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ Dashboard.jsx
│  │  ├─ ProtectedRoute.jsx
│  │  ├─ components
│  │  │  ├─ BottomBar.css
│  │  │  ├─ BottomBar.jsx
│  │  │  ├─ Bucket
│  │  │  │  ├─ Bucket.css
│  │  │  │  └─ Bucket.jsx
│  │  │  ├─ BucketContainer
│  │  │  │  ├─ BucketContainer.css
│  │  │  │  └─ BucketContainer.jsx
│  │  │  ├─ Button.jsx
│  │  │  ├─ Logo.css
│  │  │  ├─ Logo.jsx
│  │  │  ├─ Logs.css
│  │  │  ├─ Logs.jsx
│  │  │  ├─ Pond
│  │  │  │  ├─ Pond.css
│  │  │  │  └─ Pond.jsx
│  │  │  ├─ ProtectedRoute.jsx
│  │  │  ├─ ToolButton.jsx
│  │  │  ├─ Toolbar
│  │  │  │  ├─ Toolbar.css
│  │  │  │  └─ Toolbar.jsx
│  │  │  ├─ crModal
│  │  │  │  ├─ CrModal.jsx
│  │  │  │  └─ crModal.css
│  │  │  └─ trModal
│  │  │     ├─ TrModal.jsx
│  │  │     └─ trModal.css
│  │  ├─ context
│  │  │  ├─ AuthContext.jsx
│  │  │  └─ DashContext.jsx
│  │  ├─ index.css
│  │  ├─ main.jsx
│  │  ├─ pages
│  │  │  ├─ Home.jsx
│  │  │  ├─ LoginPage.jsx
│  │  │  └─ SignupPage.jsx
│  │  └─ services
│  │     ├─ api.js
│  │     └─ authService.js
│  └─ vite.config.js
├─ README.md
├─ node_modules
│  ├─ .package-lock.json
│  ├─ asynckit
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ bench.js
│  │  ├─ index.js
│  │  ├─ lib
│  │  │  ├─ abort.js
│  │  │  ├─ async.js
│  │  │  ├─ defer.js
│  │  │  ├─ iterate.js
│  │  │  ├─ readable_asynckit.js
│  │  │  ├─ readable_parallel.js
│  │  │  ├─ readable_serial.js
│  │  │  ├─ readable_serial_ordered.js
│  │  │  ├─ state.js
│  │  │  ├─ streamify.js
│  │  │  └─ terminator.js
│  │  ├─ package.json
│  │  ├─ parallel.js
│  │  ├─ serial.js
│  │  ├─ serialOrdered.js
│  │  └─ stream.js
│  ├─ axios
│  │  ├─ CHANGELOG.md
│  │  ├─ LICENSE
│  │  ├─ MIGRATION_GUIDE.md
│  │  ├─ README.md
│  │  ├─ dist
│  │  │  ├─ axios.js
│  │  │  ├─ axios.js.map
│  │  │  ├─ axios.min.js
│  │  │  ├─ axios.min.js.map
│  │  │  ├─ browser
│  │  │  │  ├─ axios.cjs
│  │  │  │  └─ axios.cjs.map
│  │  │  ├─ esm
│  │  │  │  ├─ axios.js
│  │  │  │  ├─ axios.js.map
│  │  │  │  ├─ axios.min.js
│  │  │  │  └─ axios.min.js.map
│  │  │  └─ node
│  │  │     ├─ axios.cjs
│  │  │     └─ axios.cjs.map
│  │  ├─ index.d.cts
│  │  ├─ index.d.ts
│  │  ├─ index.js
│  │  ├─ lib
│  │  │  ├─ adapters
│  │  │  │  ├─ README.md
│  │  │  │  ├─ adapters.js
│  │  │  │  ├─ fetch.js
│  │  │  │  ├─ http.js
│  │  │  │  └─ xhr.js
│  │  │  ├─ axios.js
│  │  │  ├─ cancel
│  │  │  │  ├─ CancelToken.js
│  │  │  │  ├─ CanceledError.js
│  │  │  │  └─ isCancel.js
│  │  │  ├─ core
│  │  │  │  ├─ Axios.js
│  │  │  │  ├─ AxiosError.js
│  │  │  │  ├─ AxiosHeaders.js
│  │  │  │  ├─ InterceptorManager.js
│  │  │  │  ├─ README.md
│  │  │  │  ├─ buildFullPath.js
│  │  │  │  ├─ dispatchRequest.js
│  │  │  │  ├─ mergeConfig.js
│  │  │  │  ├─ settle.js
│  │  │  │  └─ transformData.js
│  │  │  ├─ defaults
│  │  │  │  ├─ index.js
│  │  │  │  └─ transitional.js
│  │  │  ├─ env
│  │  │  │  ├─ README.md
│  │  │  │  ├─ classes
│  │  │  │  │  └─ FormData.js
│  │  │  │  └─ data.js
│  │  │  ├─ helpers
│  │  │  │  ├─ AxiosTransformStream.js
│  │  │  │  ├─ AxiosURLSearchParams.js
│  │  │  │  ├─ HttpStatusCode.js
│  │  │  │  ├─ README.md
│  │  │  │  ├─ ZlibHeaderTransformStream.js
│  │  │  │  ├─ bind.js
│  │  │  │  ├─ buildURL.js
│  │  │  │  ├─ callbackify.js
│  │  │  │  ├─ combineURLs.js
│  │  │  │  ├─ composeSignals.js
│  │  │  │  ├─ cookies.js
│  │  │  │  ├─ deprecatedMethod.js
│  │  │  │  ├─ formDataToJSON.js
│  │  │  │  ├─ formDataToStream.js
│  │  │  │  ├─ fromDataURI.js
│  │  │  │  ├─ isAbsoluteURL.js
│  │  │  │  ├─ isAxiosError.js
│  │  │  │  ├─ isURLSameOrigin.js
│  │  │  │  ├─ null.js
│  │  │  │  ├─ parseHeaders.js
│  │  │  │  ├─ parseProtocol.js
│  │  │  │  ├─ progressEventReducer.js
│  │  │  │  ├─ readBlob.js
│  │  │  │  ├─ resolveConfig.js
│  │  │  │  ├─ speedometer.js
│  │  │  │  ├─ spread.js
│  │  │  │  ├─ throttle.js
│  │  │  │  ├─ toFormData.js
│  │  │  │  ├─ toURLEncodedForm.js
│  │  │  │  ├─ trackStream.js
│  │  │  │  └─ validator.js
│  │  │  ├─ platform
│  │  │  │  ├─ browser
│  │  │  │  │  ├─ classes
│  │  │  │  │  │  ├─ Blob.js
│  │  │  │  │  │  ├─ FormData.js
│  │  │  │  │  │  └─ URLSearchParams.js
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ common
│  │  │  │  │  └─ utils.js
│  │  │  │  ├─ index.js
│  │  │  │  └─ node
│  │  │  │     ├─ classes
│  │  │  │     │  ├─ FormData.js
│  │  │  │     │  └─ URLSearchParams.js
│  │  │  │     └─ index.js
│  │  │  └─ utils.js
│  │  └─ package.json
│  ├─ call-bind-apply-helpers
│  │  ├─ .eslintrc
│  │  ├─ .github
│  │  │  └─ FUNDING.yml
│  │  ├─ .nycrc
│  │  ├─ CHANGELOG.md
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ actualApply.d.ts
│  │  ├─ actualApply.js
│  │  ├─ applyBind.d.ts
│  │  ├─ applyBind.js
│  │  ├─ functionApply.d.ts
│  │  ├─ functionApply.js
│  │  ├─ functionCall.d.ts
│  │  ├─ functionCall.js
│  │  ├─ index.d.ts
│  │  ├─ index.js
│  │  ├─ package.json
│  │  ├─ reflectApply.d.ts
│  │  ├─ reflectApply.js
│  │  ├─ test
│  │  │  └─ index.js
│  │  └─ tsconfig.json
│  ├─ combined-stream
│  │  ├─ License
│  │  ├─ Readme.md
│  │  ├─ lib
│  │  │  └─ combined_stream.js
│  │  ├─ package.json
│  │  └─ yarn.lock
│  ├─ cookie
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ dist
│  │  │  ├─ index.d.ts
│  │  │  ├─ index.js
│  │  │  └─ index.js.map
│  │  └─ package.json
│  ├─ delayed-stream
│  │  ├─ .npmignore
│  │  ├─ License
│  │  ├─ Makefile
│  │  ├─ Readme.md
│  │  ├─ lib
│  │  │  └─ delayed_stream.js
│  │  └─ package.json
│  ├─ dunder-proto
│  │  ├─ .eslintrc
│  │  ├─ .github
│  │  │  └─ FUNDING.yml
│  │  ├─ .nycrc
│  │  ├─ CHANGELOG.md
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ get.d.ts
│  │  ├─ get.js
│  │  ├─ package.json
│  │  ├─ set.d.ts
│  │  ├─ set.js
│  │  ├─ test
│  │  │  ├─ get.js
│  │  │  ├─ index.js
│  │  │  └─ set.js
│  │  └─ tsconfig.json
│  ├─ es-define-property
│  │  ├─ .eslintrc
│  │  ├─ .github
│  │  │  └─ FUNDING.yml
│  │  ├─ .nycrc
│  │  ├─ CHANGELOG.md
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ index.d.ts
│  │  ├─ index.js
│  │  ├─ package.json
│  │  ├─ test
│  │  │  └─ index.js
│  │  └─ tsconfig.json
│  ├─ es-errors
│  │  ├─ .eslintrc
│  │  ├─ .github
│  │  │  └─ FUNDING.yml
│  │  ├─ CHANGELOG.md
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ eval.d.ts
│  │  ├─ eval.js
│  │  ├─ index.d.ts
│  │  ├─ index.js
│  │  ├─ package.json
│  │  ├─ range.d.ts
│  │  ├─ range.js
│  │  ├─ ref.d.ts
│  │  ├─ ref.js
│  │  ├─ syntax.d.ts
│  │  ├─ syntax.js
│  │  ├─ test
│  │  │  └─ index.js
│  │  ├─ tsconfig.json
│  │  ├─ type.d.ts
│  │  ├─ type.js
│  │  ├─ uri.d.ts
│  │  └─ uri.js
│  ├─ es-object-atoms
│  │  ├─ .eslintrc
│  │  ├─ .github
│  │  │  └─ FUNDING.yml
│  │  ├─ CHANGELOG.md
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ RequireObjectCoercible.d.ts
│  │  ├─ RequireObjectCoercible.js
│  │  ├─ ToObject.d.ts
│  │  ├─ ToObject.js
│  │  ├─ index.d.ts
│  │  ├─ index.js
│  │  ├─ isObject.d.ts
│  │  ├─ isObject.js
│  │  ├─ package.json
│  │  ├─ test
│  │  │  └─ index.js
│  │  └─ tsconfig.json
│  ├─ es-set-tostringtag
│  │  ├─ .eslintrc
│  │  ├─ .nycrc
│  │  ├─ CHANGELOG.md
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ index.d.ts
│  │  ├─ index.js
│  │  ├─ package.json
│  │  ├─ test
│  │  │  └─ index.js
│  │  └─ tsconfig.json
│  ├─ follow-redirects
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ debug.js
│  │  ├─ http.js
│  │  ├─ https.js
│  │  ├─ index.js
│  │  └─ package.json
│  ├─ form-data
│  │  ├─ License
│  │  ├─ Readme.md
│  │  ├─ index.d.ts
│  │  ├─ lib
│  │  │  ├─ browser.js
│  │  │  ├─ form_data.js
│  │  │  └─ populate.js
│  │  └─ package.json
│  ├─ function-bind
│  │  ├─ .eslintrc
│  │  ├─ .github
│  │  │  ├─ FUNDING.yml
│  │  │  └─ SECURITY.md
│  │  ├─ .nycrc
│  │  ├─ CHANGELOG.md
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ implementation.js
│  │  ├─ index.js
│  │  ├─ package.json
│  │  └─ test
│  │     ├─ .eslintrc
│  │     └─ index.js
│  ├─ get-intrinsic
│  │  ├─ .eslintrc
│  │  ├─ .github
│  │  │  └─ FUNDING.yml
│  │  ├─ .nycrc
│  │  ├─ CHANGELOG.md
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ index.js
│  │  ├─ package.json
│  │  └─ test
│  │     └─ GetIntrinsic.js
│  ├─ get-proto
│  │  ├─ .eslintrc
│  │  ├─ .github
│  │  │  └─ FUNDING.yml
│  │  ├─ .nycrc
│  │  ├─ CHANGELOG.md
│  │  ├─ LICENSE
│  │  ├─ Object.getPrototypeOf.d.ts
│  │  ├─ Object.getPrototypeOf.js
│  │  ├─ README.md
│  │  ├─ Reflect.getPrototypeOf.d.ts
│  │  ├─ Reflect.getPrototypeOf.js
│  │  ├─ index.d.ts
│  │  ├─ index.js
│  │  ├─ package.json
│  │  ├─ test
│  │  │  └─ index.js
│  │  └─ tsconfig.json
│  ├─ gopd
│  │  ├─ .eslintrc
│  │  ├─ .github
│  │  │  └─ FUNDING.yml
│  │  ├─ CHANGELOG.md
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ gOPD.d.ts
│  │  ├─ gOPD.js
│  │  ├─ index.d.ts
│  │  ├─ index.js
│  │  ├─ package.json
│  │  ├─ test
│  │  │  └─ index.js
│  │  └─ tsconfig.json
│  ├─ has-symbols
│  │  ├─ .eslintrc
│  │  ├─ .github
│  │  │  └─ FUNDING.yml
│  │  ├─ .nycrc
│  │  ├─ CHANGELOG.md
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ index.d.ts
│  │  ├─ index.js
│  │  ├─ package.json
│  │  ├─ shams.d.ts
│  │  ├─ shams.js
│  │  ├─ test
│  │  │  ├─ index.js
│  │  │  ├─ shams
│  │  │  │  ├─ core-js.js
│  │  │  │  └─ get-own-property-symbols.js
│  │  │  └─ tests.js
│  │  └─ tsconfig.json
│  ├─ has-tostringtag
│  │  ├─ .eslintrc
│  │  ├─ .github
│  │  │  └─ FUNDING.yml
│  │  ├─ .nycrc
│  │  ├─ CHANGELOG.md
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ index.d.ts
│  │  ├─ index.js
│  │  ├─ package.json
│  │  ├─ shams.d.ts
│  │  ├─ shams.js
│  │  ├─ test
│  │  │  ├─ index.js
│  │  │  ├─ shams
│  │  │  │  ├─ core-js.js
│  │  │  │  └─ get-own-property-symbols.js
│  │  │  └─ tests.js
│  │  └─ tsconfig.json
│  ├─ hasown
│  │  ├─ .eslintrc
│  │  ├─ .github
│  │  │  └─ FUNDING.yml
│  │  ├─ .nycrc
│  │  ├─ CHANGELOG.md
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ index.d.ts
│  │  ├─ index.js
│  │  ├─ package.json
│  │  └─ tsconfig.json
│  ├─ math-intrinsics
│  │  ├─ .eslintrc
│  │  ├─ .github
│  │  │  └─ FUNDING.yml
│  │  ├─ CHANGELOG.md
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ abs.d.ts
│  │  ├─ abs.js
│  │  ├─ constants
│  │  │  ├─ maxArrayLength.d.ts
│  │  │  ├─ maxArrayLength.js
│  │  │  ├─ maxSafeInteger.d.ts
│  │  │  ├─ maxSafeInteger.js
│  │  │  ├─ maxValue.d.ts
│  │  │  └─ maxValue.js
│  │  ├─ floor.d.ts
│  │  ├─ floor.js
│  │  ├─ isFinite.d.ts
│  │  ├─ isFinite.js
│  │  ├─ isInteger.d.ts
│  │  ├─ isInteger.js
│  │  ├─ isNaN.d.ts
│  │  ├─ isNaN.js
│  │  ├─ isNegativeZero.d.ts
│  │  ├─ isNegativeZero.js
│  │  ├─ max.d.ts
│  │  ├─ max.js
│  │  ├─ min.d.ts
│  │  ├─ min.js
│  │  ├─ mod.d.ts
│  │  ├─ mod.js
│  │  ├─ package.json
│  │  ├─ pow.d.ts
│  │  ├─ pow.js
│  │  ├─ round.d.ts
│  │  ├─ round.js
│  │  ├─ sign.d.ts
│  │  ├─ sign.js
│  │  ├─ test
│  │  │  └─ index.js
│  │  └─ tsconfig.json
│  ├─ mime-db
│  │  ├─ HISTORY.md
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ db.json
│  │  ├─ index.js
│  │  └─ package.json
│  ├─ mime-types
│  │  ├─ HISTORY.md
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ index.js
│  │  └─ package.json
│  ├─ proxy-from-env
│  │  ├─ .eslintrc
│  │  ├─ .travis.yml
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ index.js
│  │  ├─ package.json
│  │  └─ test.js
│  ├─ react-dom
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ cjs
│  │  │  ├─ react-dom-client.development.js
│  │  │  ├─ react-dom-client.production.js
│  │  │  ├─ react-dom-profiling.development.js
│  │  │  ├─ react-dom-profiling.profiling.js
│  │  │  ├─ react-dom-server-legacy.browser.development.js
│  │  │  ├─ react-dom-server-legacy.browser.production.js
│  │  │  ├─ react-dom-server-legacy.node.development.js
│  │  │  ├─ react-dom-server-legacy.node.production.js
│  │  │  ├─ react-dom-server.browser.development.js
│  │  │  ├─ react-dom-server.browser.production.js
│  │  │  ├─ react-dom-server.bun.development.js
│  │  │  ├─ react-dom-server.bun.production.js
│  │  │  ├─ react-dom-server.edge.development.js
│  │  │  ├─ react-dom-server.edge.production.js
│  │  │  ├─ react-dom-server.node.development.js
│  │  │  ├─ react-dom-server.node.production.js
│  │  │  ├─ react-dom-test-utils.development.js
│  │  │  ├─ react-dom-test-utils.production.js
│  │  │  ├─ react-dom.development.js
│  │  │  ├─ react-dom.production.js
│  │  │  ├─ react-dom.react-server.development.js
│  │  │  └─ react-dom.react-server.production.js
│  │  ├─ client.js
│  │  ├─ client.react-server.js
│  │  ├─ index.js
│  │  ├─ package.json
│  │  ├─ profiling.js
│  │  ├─ profiling.react-server.js
│  │  ├─ react-dom.react-server.js
│  │  ├─ server.browser.js
│  │  ├─ server.bun.js
│  │  ├─ server.edge.js
│  │  ├─ server.js
│  │  ├─ server.node.js
│  │  ├─ server.react-server.js
│  │  ├─ static.browser.js
│  │  ├─ static.edge.js
│  │  ├─ static.js
│  │  ├─ static.node.js
│  │  ├─ static.react-server.js
│  │  └─ test-utils.js
│  ├─ react-router-dom
│  │  ├─ LICENSE.md
│  │  ├─ README.md
│  │  ├─ dist
│  │  │  ├─ index.d.mts
│  │  │  ├─ index.d.ts
│  │  │  ├─ index.js
│  │  │  └─ index.mjs
│  │  └─ package.json
│  ├─ react-router
│  │  ├─ CHANGELOG.md
│  │  ├─ LICENSE.md
│  │  ├─ README.md
│  │  ├─ dist
│  │  │  ├─ development
│  │  │  │  ├─ chunk-LSOULM7L.mjs
│  │  │  │  ├─ data-CQbyyGzl.d.mts
│  │  │  │  ├─ data-CQbyyGzl.d.ts
│  │  │  │  ├─ dom-export.d.mts
│  │  │  │  ├─ dom-export.d.ts
│  │  │  │  ├─ dom-export.js
│  │  │  │  ├─ dom-export.mjs
│  │  │  │  ├─ fog-of-war-CyHis97d.d.mts
│  │  │  │  ├─ fog-of-war-D4x86-Xc.d.ts
│  │  │  │  ├─ index.d.mts
│  │  │  │  ├─ index.d.ts
│  │  │  │  ├─ index.js
│  │  │  │  ├─ index.mjs
│  │  │  │  ├─ lib
│  │  │  │  │  └─ types
│  │  │  │  │     ├─ route-module.d.mts
│  │  │  │  │     ├─ route-module.d.ts
│  │  │  │  │     ├─ route-module.js
│  │  │  │  │     └─ route-module.mjs
│  │  │  │  ├─ route-data-OcOrqK13.d.mts
│  │  │  │  └─ route-data-OcOrqK13.d.ts
│  │  │  └─ production
│  │  │     ├─ chunk-SAWFLE7G.mjs
│  │  │     ├─ data-CQbyyGzl.d.mts
│  │  │     ├─ data-CQbyyGzl.d.ts
│  │  │     ├─ dom-export.d.mts
│  │  │     ├─ dom-export.d.ts
│  │  │     ├─ dom-export.js
│  │  │     ├─ dom-export.mjs
│  │  │     ├─ fog-of-war-CyHis97d.d.mts
│  │  │     ├─ fog-of-war-D4x86-Xc.d.ts
│  │  │     ├─ index.d.mts
│  │  │     ├─ index.d.ts
│  │  │     ├─ index.js
│  │  │     ├─ index.mjs
│  │  │     ├─ lib
│  │  │     │  └─ types
│  │  │     │     ├─ route-module.d.mts
│  │  │     │     ├─ route-module.d.ts
│  │  │     │     ├─ route-module.js
│  │  │     │     └─ route-module.mjs
│  │  │     ├─ route-data-OcOrqK13.d.mts
│  │  │     └─ route-data-OcOrqK13.d.ts
│  │  └─ package.json
│  ├─ react
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ cjs
│  │  │  ├─ react-compiler-runtime.development.js
│  │  │  ├─ react-compiler-runtime.production.js
│  │  │  ├─ react-compiler-runtime.profiling.js
│  │  │  ├─ react-jsx-dev-runtime.development.js
│  │  │  ├─ react-jsx-dev-runtime.production.js
│  │  │  ├─ react-jsx-dev-runtime.profiling.js
│  │  │  ├─ react-jsx-dev-runtime.react-server.development.js
│  │  │  ├─ react-jsx-dev-runtime.react-server.production.js
│  │  │  ├─ react-jsx-runtime.development.js
│  │  │  ├─ react-jsx-runtime.production.js
│  │  │  ├─ react-jsx-runtime.profiling.js
│  │  │  ├─ react-jsx-runtime.react-server.development.js
│  │  │  ├─ react-jsx-runtime.react-server.production.js
│  │  │  ├─ react.development.js
│  │  │  ├─ react.production.js
│  │  │  ├─ react.react-server.development.js
│  │  │  └─ react.react-server.production.js
│  │  ├─ compiler-runtime.js
│  │  ├─ index.js
│  │  ├─ jsx-dev-runtime.js
│  │  ├─ jsx-dev-runtime.react-server.js
│  │  ├─ jsx-runtime.js
│  │  ├─ jsx-runtime.react-server.js
│  │  ├─ package.json
│  │  └─ react.react-server.js
│  ├─ scheduler
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ cjs
│  │  │  ├─ scheduler-unstable_mock.development.js
│  │  │  ├─ scheduler-unstable_mock.production.js
│  │  │  ├─ scheduler-unstable_post_task.development.js
│  │  │  ├─ scheduler-unstable_post_task.production.js
│  │  │  ├─ scheduler.development.js
│  │  │  ├─ scheduler.native.development.js
│  │  │  ├─ scheduler.native.production.js
│  │  │  └─ scheduler.production.js
│  │  ├─ index.js
│  │  ├─ index.native.js
│  │  ├─ package.json
│  │  ├─ unstable_mock.js
│  │  └─ unstable_post_task.js
│  ├─ set-cookie-parser
│  │  ├─ LICENSE
│  │  ├─ README.md
│  │  ├─ lib
│  │  │  └─ set-cookie.js
│  │  └─ package.json
│  └─ turbo-stream
│     ├─ LICENSE
│     ├─ README.md
│     ├─ dist
│     │  ├─ flatten.d.ts
│     │  ├─ flatten.js
│     │  ├─ turbo-stream.d.ts
│     │  ├─ turbo-stream.js
│     │  ├─ turbo-stream.mjs
│     │  ├─ unflatten.d.ts
│     │  ├─ unflatten.js
│     │  ├─ utils.d.ts
│     │  └─ utils.js
│     └─ package.json
├─ package-lock.json
└─ package.json
```
