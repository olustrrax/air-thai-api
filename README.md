# AIR THAI
find near station 
data based on [air4thai](http://air4thai.pcd.go.th/webV2/)

## Preparation
```bash
node version ^10
```

## Installation
```bash

npm install air-thai-api
```
## Usage
```typescript

import * as AirThai from "air-thai-api"

interface input = {
  lat: number
  long: number
}

const location:input = {
  lat: 13.670809600000002,
  long: 100.6501888
}

AirThai(location)

```
## Reference
[reference](http://air4thai.pcd.go.th/webV2/)
