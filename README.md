# AIR THAI

Check the weather based on location, specify location values with latitude and longitude.

## Preparation
```bash
node version above 10
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
  lat: 14.026564760517724,
  long: 100.61505110969684
}

AirThai(location)

```
## Reference
[reference](http://air4thai.pcd.go.th/webV2/)
