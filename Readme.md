A lightweight library for loading components on the basis of device detection.

# Purpose of creating this library
Sometimes we often create components different for Mobile, Tablets or Desktop and want them to get called respectively as per the device detection. Well the purpose of creating this library is to ease the debugging on development environment like when we debug our React application on Chrome browser with *'Toggle device toolbar'* and change the device resolution, the respective components should get called.

If you don't find overhead of debugging such scenarios in their respective device resolutions like Tablets, Mobile or Desktop I highly recommend to use library [react-device-detect](https://github.com/duskload/react-device-detect) instead of this one.

# Examples

## Import library
```javascript
import DeviceIdentifier from 'react-device-identifier';
```

## Run component only on Desktop
```javascript
<DeviceIdentifier isDesktop={true}>
    // Desktop Component goes here
</DeviceIdentifier>
```
## Run component only on Mobile
```javascript
<DeviceIdentifier isMobile={true}>
    // Mobile Component goes here
</DeviceIdentifier>
```

## Run component only on Tablet
```javascript
<DeviceIdentifier isTablet={true}>
    // Tablet Component goes here
</DeviceIdentifier>
```

## Run component for Mobile & Tablet
```javascript
<DeviceIdentifier isMobile={true} isTablet={true}>
    // Tablet & Mobile Component goes here
</DeviceIdentifier>
```

We can make this more granular and can introduce more options like detecting low resolution tablets, But for now I kept it simple and covers the basic scenarios.

Feel free to send out pull request or can contact me directly via my eamil id [nairabhijit6@gmail.com](mailto:nairabhijit6@gmail.com)
