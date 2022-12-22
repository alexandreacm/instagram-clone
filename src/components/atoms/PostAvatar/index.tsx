import React from "react";
import { Image, ImageProps } from "react-native";

import { styles } from "./styles";

export default function PostAvatar({ ...props }: ImageProps) {
  return <Image {...props} style={styles.postAvatar} />;
}
