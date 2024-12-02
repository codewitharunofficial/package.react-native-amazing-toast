````markdown
# Toast Package for React Native & Expo

A simple and customizable Toast library for React Native and Expo. It allows you to show toast messages with different types, customizable styles, and positions.

---

## Installation

```bash
npm install react-native-amazing-toast
```
````

---

## Usage

```tsx
import { ToastProvider } from "react-native-amazing-toast";
```

_and wrap your app with the ToastProivder_

### **Basic Example**

```tsx
import { useToast } from "react-native-amazing-toast";

export default function App() {
  const { showToast } = useToast();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Button title='Success' onPress={() => showToast({ message: "Screen 2 is a success", type: 'success', duration: 2000, backgroundColor: 'black'})} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}
```

---

## Props

| Prop Name         | Type   | Default     | Description                                                                 |
| ----------------- | ------ | ----------- | --------------------------------------------------------------------------- |
| `type`            | string | `info`      | The type of toast message. Can be `success`, `error`, `info`, or `warning`. |
| `message`         | string | `""`        | The message to be displayed in the toast.                                   |
| `backgroundColor` | string | `lightblue` | Background color of the toast.                                              |
| `textColor`       | string | `black`     | Color of the toast text.                                                    |
| `position`        | string | `bottom`    | Position of the toast on the screen (`top` or `bottom`).                    |
| `duration`        | number | `3000`      | Duration for which the toast is visible (in milliseconds).                  |
| `icon`            | any    | `null`      | Custom icon for the toast. If not provided, no icon is displayed.           |

---

## Advanced Usage

### **Customizing Props**

```tsx
<View style={styles.container}>
  <Text style={styles.title}>Tab One</Text>
  <Button
    title="Success"
    onPress={() =>
      showToast({
        message: "Test Successful",
        type: "success",
        duration: 3000,
        backgroundColor: "lightblue",
        position: "bottom",
        icon: require("@/assets/images/icon.png"),
      })
    }
  />
  <Button
    title="Warning"
    onPress={() =>
      showToast({
        message: "Warning!!",
        type: "warning",
        duration: 3000,
        backgroundColor: "white",
        position: "bottom",
        icon: "../../assets/images/icon.png",
      })
    }
  />
  <Button
    title="Error"
    onPress={() =>
      showToast({
        message: "An Error Occurred",
        type: "error",
        duration: 3000,
        backgroundColor: "white",
        position: "bottom",
        icon: "../../assets/images/icon.png",
      })
    }
  />
  <Button
    title="Info"
    onPress={() =>
      showToast({
        message: "Info Are Here",
        type: "info",
        duration: 500,
        position: "bottom",
        icon: require("@/assets/images/icon.png"),
      })
    }
  />
  <View
    style={styles.separator}
    lightColor="#eee"
    darkColor="rgba(255,255,255,0.1)"
  />
  <EditScreenInfo path="app/(tabs)/index.tsx" />
</View>
```

### **No Icon Example**

If you do not pass an `icon` prop, no app-icon will be shown in the toast.

---

## Default Behaviors

- **Type:** The default toast type is `info`.
- **Icon:** If no icon is provided, the toast will display without an icon.
- **Position:** The default position of the toast is at the bottom of the screen.
- **Background Color:** Light blue by default.
- **Text Color:** Black by default.
- **Duration:** Toast is visible for `3000ms` by default.

---

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

---

## License

This project is licensed under the MIT License.

```
