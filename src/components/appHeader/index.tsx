import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

type BackButtonProps = {
  isEnabled: boolean;
  icon: React.ReactNode | string;
  color?: string;
  size?: number;
  isLargerBackButton?: boolean;
  onPress?: () => void;
};

type HeaderTitleProps = {
  title: string;
  textStyles?: TextStyle;
  alignment?: 'left' | 'center' | 'right';
};

type ActionItem = {
  icon: React.ReactNode | string;
  iconSize?: number;
  alignment: 'left' | 'right';
  onPress: () => void;
};

type ASAppHeaderProps = {
  styles?: ViewStyle;
  backButton?: BackButtonProps;
  headerTitle: HeaderTitleProps;
  actions?: ActionItem[];
};

const ASAppHeader: React.FC<ASAppHeaderProps> = ({
  styles: customStyles = {},
  backButton,
  headerTitle,
  actions = [],
}) => {
  const renderIcon = (
    icon: React.ReactNode | string,
    size = 24,
    color = '#000'
  ) => {
    if (typeof icon === 'string') {
      return (
        <Image
          source={{ uri: icon }}
          style={{ width: size, height: size, tintColor: color }}
        />
      );
    }
    return icon;
  };

  const renderActions = (alignment: 'left' | 'right') =>
    actions
      .filter((action) => action.alignment === alignment)
      .map((action, idx) => (
        <TouchableOpacity
          key={`${alignment}-${idx}`}
          onPress={action.onPress}
          style={stylesObj.actionButton}
        >
          {renderIcon(action.icon, action.iconSize)}
        </TouchableOpacity>
      ));

  const renderBackButton = () => {
    if (!backButton?.isEnabled) return null;

    const btn = (
      <TouchableOpacity onPress={backButton.onPress} style={stylesObj.backButton}>
        {renderIcon(backButton.icon, backButton.size, backButton.color)}
      </TouchableOpacity>
    );

    if (backButton.isLargerBackButton) {
      return <View style={stylesObj.fullRowBack}>{btn}</View>;
    }

    return btn;
  };

  const getTitleContainerStyle = (): ViewStyle => {
    const alignment = headerTitle.alignment || 'center';

    if (alignment === 'center') {
      return {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1,
        pointerEvents: 'none',
        paddingHorizontal: 8,
      };
    }

    return {
      flex: 1,
      justifyContent: 'center',
      alignItems: alignment === 'left' ? 'flex-start' : 'flex-end',
      paddingHorizontal: 8,
    };
  };

  const getTitleTextAlign = (): TextStyle['textAlign'] => {
    switch (headerTitle.alignment) {
      case 'left':
        return 'left';
      case 'right':
        return 'right';
      case 'center':
      default:
        return 'center';
    }
  };

  return (
    <View style={customStyles}>
      {/* Full row back button (if enabled) */}
      {backButton?.isEnabled && backButton.isLargerBackButton && renderBackButton()}

      {/* Main app header */}
      <View style={stylesObj.headerContainer}>
        <View style={stylesObj.leftContainer}>
          {!backButton?.isLargerBackButton && renderBackButton()}
          {renderActions('left')}
        </View>

        {/* Title */}
        <View style={getTitleContainerStyle()}>
          <Text
            style={[
              stylesObj.titleText,
              headerTitle.textStyles,
              { textAlign: getTitleTextAlign() },
            ]}
            numberOfLines={1}
          >
            {headerTitle.title}
          </Text>
        </View>

        <View style={stylesObj.rightContainer}>{renderActions('right')}</View>
      </View>
    </View>
  );
};

const stylesObj = StyleSheet.create({
  headerContainer: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    marginRight: 8,
  },
  fullRowBack: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  actionButton: {
    marginHorizontal: 6,
  },
});

export default ASAppHeader;
