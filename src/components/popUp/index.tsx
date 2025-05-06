import React, { ReactNode } from "react";
import {
  Modal,
  ModalProps,
  StyleSheet,
  View,
  GestureResponderEvent,
} from "react-native";
import ASButton from "../button";
import ASText from "../text";

export type ASPopUpProps = ModalProps & {
  children: ReactNode | ((onPressBackground?: () => void) => ReactNode);
  visible: boolean;
  isShowCloseIcon?: boolean;
  onClose: () => void;
  testId?: string;
};

const ASPopUp: React.FC<ASPopUpProps> = (props: ASPopUpProps) => {
  const {
    children,
    visible,
    isShowCloseIcon = true,
    onClose,
    testId = "ASPopUp",
    ...restProps
  } = props;

  return (
    <Modal
      style={styles.modalContainer}
      testID={`modalView-${testId}`}
      animationType={"fade"}
      transparent={true}
      visible={visible}
      onRequestClose={() => {}}
      {...restProps}
    >
      <View style={styles.container}>{children}</View>
      {isShowCloseIcon && (
        <ASButton
          testID={`closeButton-${testId}`}
          style={styles.closeButton}
          onPress={onClose}
        >
          <ASText testID={`closeLabel-${testId}`} style={styles.closeIconText}>
            X
          </ASText>
        </ASButton>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "#fff",
    borderRadius: 50,
    position: "absolute",
    top: 40,
    right: 10,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  closeIconText: {
    fontSize: 18,
  },
});

export default ASPopUp;
