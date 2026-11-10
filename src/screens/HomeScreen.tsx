import { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { EmptyState } from '../components/EmptyState';
import { SectionTabs, type SectionId } from '../components/SectionTabs';
import { styles } from './HomeScreen.styles';

const sectionContent: Record<SectionId, { index: string; title: string; description: string }> = {
  children: {
    index: '01',
    title: 'Список пока пуст',
    description: 'Здесь появятся дети и сроки действия их спортивных разрядов.',
  },
  judge: {
    index: '02',
    title: 'Категория не добавлена',
    description: 'Здесь можно будет отслеживать срок действия вашей судейской категории.',
  },
};

export default function HomeScreen() {
  const [activeSection, setActiveSection] = useState<SectionId>('children');
  const content = sectionContent[activeSection];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>ХУДОЖЕСТВЕННАЯ ГИМНАСТИКА</Text>
          <Text style={styles.title}>Разряды</Text>
          <Text style={styles.subtitle}>Сроки и категории под контролем</Text>
        </View>

        <SectionTabs
          selectedSection={activeSection}
          onSelectSection={setActiveSection}
        />

        <EmptyState {...content} />

        <Text style={styles.footer}>Тренерский журнал · версия 0.1</Text>
      </View>
    </SafeAreaView>
  );
}