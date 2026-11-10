import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 20,
  },
  header: {
    marginBottom: 32,
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  title: {
    marginTop: 12,
    color: colors.text,
    fontSize: 36,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 6,
    color: colors.textMuted,
    fontSize: 15,
  },
  footer: {
    color: colors.textSubtle,
    fontSize: 12,
    textAlign: 'center',
  },
});