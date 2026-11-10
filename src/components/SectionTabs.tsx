import { Pressable, Text, View } from 'react-native';
import { styles } from './SectionTabs.styles';

export type SectionId = 'children' | 'judge';

type SectionTabsProps = {
  selectedSection: SectionId;
  onSelectSection: (section: SectionId) => void;
};

const sections: { id: SectionId; label: string }[] = [
  { id: 'children', label: 'Дети' },
  { id: 'judge', label: 'Моя категория' },
];

export function SectionTabs({ selectedSection, onSelectSection }: SectionTabsProps) {
  return (
    <View style={styles.container} accessibilityRole="tablist">
      {sections.map((section) => {
        const isSelected = selectedSection === section.id;

        return (
          <Pressable
            key={section.id}
            accessibilityRole="tab"
            accessibilityState={{ selected: isSelected }}
            onPress={() => onSelectSection(section.id)}
            style={[styles.tab, isSelected && styles.selectedTab]}
          >
            <Text style={[styles.label, isSelected && styles.selectedLabel]}>
              {section.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}