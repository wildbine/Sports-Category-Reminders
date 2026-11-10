import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tab: {
    minHeight: 48,
    justifyContent: 'center',
    marginRight: 28,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  selectedTab: {
    borderBottomColor: colors.accentStrong,
  },
  label: {
    color: colors.textMuted,
    fontSize: 15,
    fontWeight: '600',
  },
  selectedLabel: {
    color: colors.text,
  },
});