import { Text, View } from 'react-native';
import { styles } from './EmptyState.styles';

type EmptyStateProps = {
  index: string;
  title: string;
  description: string;
};

export function EmptyState({ index, title, description }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <View style={styles.marker}>
        <Text style={styles.markerText}>{index}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}