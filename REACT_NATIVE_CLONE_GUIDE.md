# 🚀 KurdLingo React Native Clone - Complete Implementation Guide

## 📋 Project Overview

This document provides a **complete specification** to clone the KurdLingo web application into a React Native mobile app for **Android and iOS**. The AI assistant should follow this guide to create a pixel-perfect, feature-complete mobile application.

---

## 🎯 Project Summary

**App Name:** KurdLingo  
**Purpose:** Interactive Kurdish (Sorani) language learning app with Duolingo-style gamification  
**Target Platforms:** Android & iOS  
**Tech Stack:** React Native with Expo (latest version), TypeScript, React Navigation

---

## 📦 Required Dependencies

```json
{
  "dependencies": {
    "expo": "~52.0.0",
    "@expo/vector-icons": "^14.0.0",
    "expo-font": "~13.0.0",
    "expo-haptics": "~14.0.0",
    "expo-status-bar": "~2.0.0",
    "expo-av": "~15.0.0",
    "@react-navigation/native": "^7.0.0",
    "@react-navigation/native-stack": "^7.0.0",
    "@react-navigation/bottom-tabs": "^7.0.0",
    "react-native-reanimated": "~3.16.0",
    "react-native-gesture-handler": "~2.20.0",
    "react-native-safe-area-context": "~4.12.0",
    "react-native-screens": "~4.0.0",
    "@react-native-async-storage/async-storage": "~2.1.0",
    "react-native-svg": "~15.8.0",
    "lucide-react-native": "^0.460.0"
  },
  "devDependencies": {
    "@types/react": "~18.3.0",
    "typescript": "~5.3.0"
  }
}
```

---

## 🏗️ Project Structure

```
kurdlingo-mobile/
├── app.json
├── App.tsx
├── babel.config.js
├── tsconfig.json
├── package.json
├── assets/
│   ├── fonts/
│   │   └── Rabar_039.ttf (Kurdish font)
│   └── images/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   └── Button.tsx
│   │   ├── ProgressBar/
│   │   │   └── ProgressBar.tsx
│   │   ├── OptionCard/
│   │   │   └── OptionCard.tsx
│   │   ├── LivesCounter/
│   │   │   └── LivesCounter.tsx
│   │   └── FeedbackSheet/
│   │       └── FeedbackSheet.tsx
│   ├── screens/
│   │   ├── LandingScreen.tsx
│   │   ├── LearnScreen.tsx
│   │   ├── LessonScreen.tsx
│   │   ├── GuidebookScreen.tsx
│   │   ├── GuidebookHubScreen.tsx
│   │   ├── LeaderboardScreen.tsx
│   │   ├── QuestsScreen.tsx
│   │   ├── ShopScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── navigation/
│   │   ├── AppNavigator.tsx
│   │   ├── BottomTabNavigator.tsx
│   │   └── types.ts
│   ├── context/
│   │   └── LanguageContext.tsx
│   ├── data/
│   │   ├── translations.ts
│   │   └── courses/
│   │       ├── unit1.ts
│   │       ├── unit2.ts
│   │       ├── unit3.ts
│   │       └── unit4.ts
│   ├── hooks/
│   │   ├── useProgress.ts
│   │   └── useHaptics.ts
│   ├── utils/
│   │   ├── progressManager.ts
│   │   └── iconMapping.ts
│   ├── types/
│   │   └── index.ts
│   └── styles/
│       └── theme.ts
```

---

## 🎨 Design System & Theme

### Theme Configuration (`src/styles/theme.ts`)

```typescript
export const theme = {
  colors: {
    // Brand Colors
    primary: '#22c55e',
    primaryDark: '#16a34a',
    primaryLight: '#4ade80',
    primary50: 'rgba(34, 197, 94, 0.12)',
    
    // Accent Colors
    gold: '#f59e0b',
    goldDark: '#d97706',
    blue: '#3b82f6',
    red: '#ef4444',
    redDark: '#dc2626',
    
    // Neutrals
    text: '#0f172a',
    textSecondary: '#475569',
    textLight: '#64748b',
    
    background: '#ffffff',
    surface: '#f8fafc',
    surfaceVariant: '#f1f5f9',
    
    border: '#e2e8f0',
    divider: '#cbd5e1',
    
    // Semantic
    success: '#22c55e',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
    
    // Dark Mode
    dark: {
      text: '#f1f5f9',
      textSecondary: '#94a3b8',
      background: '#0f172a',
      surface: '#1e293b',
      border: '#334155',
    }
  },
  
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  
  borderRadius: {
    xs: 4,
    sm: 6,
    md: 10,
    lg: 14,
    xl: 18,
    xxl: 24,
    full: 9999,
  },
  
  typography: {
    fontFamily: {
      regular: 'System',
      medium: 'System',
      bold: 'System',
      kurdish: 'Rabar_039',
    },
    sizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      xxl: 24,
      title: 28,
      hero: 32,
    }
  },
  
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.15,
      shadowRadius: 16,
      elevation: 8,
    },
    button3D: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 0,
      elevation: 4,
    }
  }
};

// Unit-specific colors for visual variety
export const unitColors = {
  'unit-1': { primary: '#58cc02', dark: '#23ac00', light: '#dcfce7' },
  'unit-2': { primary: '#1cb0f6', dark: '#0c8fd6', light: '#dbeafe' },
  'unit-3': { primary: '#ff4b4b', dark: '#d33131', light: '#fee2e2' },
  'unit-4': { primary: '#ce82ff', dark: '#a560ff', light: '#f3e8ff' },
};
```

---

## 📱 Type Definitions (`src/types/index.ts`)

```typescript
// Core type definitions - COPY EXACTLY FROM WEB APP

export interface Exercise {
    id?: number;
    type: 'multiple-choice' | 'match-pairs' | 'sentence-builder' | 'fill-blank' | 
          'typing' | 'listening' | 'conversation' | 'image-selection' | 
          'vocabulary-grid' | 'cultural-note' | 'cultural-timeline' | 'image-match' | 
          'story-completion' | 'career-path' | 'route-planner' | 'emergency-phrases' | 
          'app-vocabulary' | 'tech-troubleshooting' | 'roleplay-chat';
    question: string;
    options?: ExerciseOption[] | string[];
    pairs?: MatchPair[];
    sourceText?: string;
    correctSentence?: string[];
    sentenceParts?: string[];
    correctOption?: string;
    correctAnswer?: string;
    hints?: string[];
    dialogue?: DialogueLine[];
    correctOptions?: string[];
    audioUrl?: string;
    images?: ImageOption[];
    items?: any[];
    content?: string;
    quiz?: any;
    events?: any[];
    story?: string;
    blanks?: string[];
    levels?: any[];
    start?: string;
    destination?: string;
    steps?: any[];
    phrases?: any[];
    apps?: any[];
    problems?: any[];
    scenario?: string;
    chatMessages?: ChatMessage[];
    acceptableResponses?: string[];
    keywordsRequired?: string[];
}

export interface ExerciseOption {
    id?: string;
    text: string;
    image?: string;
    correct: boolean;
}

export interface MatchPair {
    kurdish: string;
    english?: string;
    image?: string;
}

export interface DialogueLine {
    speaker: string;
    text: string;
    options?: string[];
}

export interface ChatMessage {
    sender: 'ai' | 'user';
    text: string;
    avatar?: string;
    name?: string;
}

export interface ImageOption {
    url: string;
    text: string;
    correct: boolean;
}

export interface Lesson {
    id: string;
    title: string;
    icon?: string;
    exercises: Exercise[];
}

export interface GuidebookVisual {
    type: 'sentence-structure' | 'pronoun-grid' | 'timeline' | 'comparison' | 
          'conjugation' | 'dialogue' | (string & {});
    data: any;
}

export interface GuidebookSubsection {
    subtitle: string;
    text?: string;
    list?: string[];
    visual?: GuidebookVisual;
    example?: {
        english: string;
        kurdish: string;
        transliteration?: string;
    };
}

export interface GuidebookSection {
    id: string;
    title: string;
    content: string;
    subsections?: GuidebookSubsection[];
    visual?: GuidebookVisual;
    items?: Array<{ term: string; definition: string }>;
    list?: string[];
}

export interface KeyPhrase {
    english: string;
    kurdish: string;
    pronunciation: string;
}

export interface Guidebook {
    introduction: string;
    sections: GuidebookSection[];
    keyPhrases: KeyPhrase[];
}

export interface Unit {
    id: string;
    title: string;
    description: string;
    guidebook: Guidebook;
    lessons: Lesson[];
}

export interface UserProgress {
    unitsProgress: {
        [unitId: string]: {
            lessonsCompleted: number;
            totalLessons: number;
        };
    };
    streak: number;
    xp: number;
    level: number;
}

export interface LessonProgress {
    lessonId: string;
    completedAt: string;
    xpEarned: number;
    attempts: number;
}

// Navigation Types
export type RootStackParamList = {
    Landing: undefined;
    MainTabs: undefined;
    Lesson: { lessonId: string };
    Guidebook: { unitId: string };
};

export type MainTabParamList = {
    Learn: undefined;
    GuidebookHub: undefined;
    Leaderboard: undefined;
    Quests: undefined;
    Shop: undefined;
    Profile: undefined;
};
```

---

## 🌍 Language Context (`src/context/LanguageContext.tsx`)

```typescript
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager } from 'react-native';
import { translations } from '../data/translations';

type Language = 'en' | 'ckb';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    t: (key: string) => string;
    isRTL: boolean;
    kurdishFont: string;
    setKurdishFont: (font: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('ckb'); // Default Kurdish
    const [kurdishFont, setKurdishFont] = useState<string>('Rabar_039');
    const isRTL = language === 'ckb';

    useEffect(() => {
        // Load saved preferences
        const loadPreferences = async () => {
            const savedLang = await AsyncStorage.getItem('kurdlingo-language');
            const savedFont = await AsyncStorage.getItem('kurdlingo-font');
            if (savedLang) setLanguage(savedLang as Language);
            if (savedFont) setKurdishFont(savedFont);
        };
        loadPreferences();
    }, []);

    useEffect(() => {
        // Handle RTL layout
        I18nManager.forceRTL(isRTL);
        I18nManager.allowRTL(isRTL);
    }, [isRTL]);

    const t = (key: string): string => {
        return translations[language]?.[key] || key;
    };

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'ckb' : 'en';
        setLanguage(newLang);
        AsyncStorage.setItem('kurdlingo-language', newLang);
    };

    return (
        <LanguageContext.Provider value={{ 
            language, setLanguage, toggleLanguage, t, isRTL, kurdishFont, setKurdishFont 
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within LanguageProvider');
    return context;
};
```

---

## 🧭 Navigation (`src/navigation/AppNavigator.tsx`)

```typescript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, BookOpen, Trophy, Target, Store, User } from 'lucide-react-native';
import { useLanguage } from '../context/LanguageContext';
import { theme } from '../styles/theme';

// Screens
import LandingScreen from '../screens/LandingScreen';
import LearnScreen from '../screens/LearnScreen';
import LessonScreen from '../screens/LessonScreen';
import GuidebookScreen from '../screens/GuidebookScreen';
import GuidebookHubScreen from '../screens/GuidebookHubScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import QuestsScreen from '../screens/QuestsScreen';
import ShopScreen from '../screens/ShopScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    const { t } = useLanguage();
    
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.textLight,
                tabBarStyle: {
                    height: 72,
                    paddingBottom: 8,
                    paddingTop: 8,
                    backgroundColor: theme.colors.background,
                    borderTopColor: theme.colors.border,
                    borderTopWidth: 1,
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '500',
                }
            }}
        >
            <Tab.Screen 
                name="Learn" 
                component={LearnScreen}
                options={{
                    tabBarLabel: t('learn'),
                    tabBarIcon: ({ color, size }) => <Home size={size} color={color} />
                }}
            />
            <Tab.Screen 
                name="GuidebookHub" 
                component={GuidebookHubScreen}
                options={{
                    tabBarLabel: t('guidebook'),
                    tabBarIcon: ({ color, size }) => <BookOpen size={size} color={color} />
                }}
            />
            <Tab.Screen 
                name="Leaderboard" 
                component={LeaderboardScreen}
                options={{
                    tabBarLabel: t('leaderboards'),
                    tabBarIcon: ({ color, size }) => <Trophy size={size} color={color} />
                }}
            />
            <Tab.Screen 
                name="Quests" 
                component={QuestsScreen}
                options={{
                    tabBarLabel: t('quests'),
                    tabBarIcon: ({ color, size }) => <Target size={size} color={color} />
                }}
            />
            <Tab.Screen 
                name="Shop" 
                component={ShopScreen}
                options={{
                    tabBarLabel: t('shop'),
                    tabBarIcon: ({ color, size }) => <Store size={size} color={color} />
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    tabBarLabel: t('profile'),
                    tabBarIcon: ({ color, size }) => <User size={size} color={color} />
                }}
            />
        </Tab.Navigator>
    );
};

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Landing" component={LandingScreen} />
                <Stack.Screen name="MainTabs" component={BottomTabs} />
                <Stack.Screen 
                    name="Lesson" 
                    component={LessonScreen}
                    options={{ gestureEnabled: false }}
                />
                <Stack.Screen name="Guidebook" component={GuidebookScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
```

---

## 🔘 Button Component (`src/components/Button/Button.tsx`)

```typescript
import React from 'react';
import { 
    TouchableOpacity, 
    Text, 
    StyleSheet, 
    ViewStyle, 
    TextStyle,
    Animated,
    View
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { theme } from '../../styles/theme';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'ghost' | 'outline' | 'disabled';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    onPress?: () => void;
    disabled?: boolean;
    style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    onPress,
    disabled = false,
    style,
}) => {
    const animatedValue = React.useRef(new Animated.Value(0)).current;

    const handlePressIn = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    const handlePress = () => {
        if (disabled || variant === 'disabled') return;
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress?.();
    };

    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 4], // 3D press effect
    });

    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return {
                    container: styles.primaryContainer,
                    text: styles.primaryText,
                    shadow: { backgroundColor: theme.colors.primaryDark },
                };
            case 'success':
                return {
                    container: styles.successContainer,
                    text: styles.successText,
                    shadow: { backgroundColor: theme.colors.primaryDark },
                };
            case 'danger':
                return {
                    container: styles.dangerContainer,
                    text: styles.dangerText,
                    shadow: { backgroundColor: theme.colors.redDark },
                };
            case 'secondary':
                return {
                    container: styles.secondaryContainer,
                    text: styles.secondaryText,
                    shadow: { backgroundColor: theme.colors.border },
                };
            case 'outline':
                return {
                    container: styles.outlineContainer,
                    text: styles.outlineText,
                    shadow: { backgroundColor: 'transparent' },
                };
            case 'ghost':
                return {
                    container: styles.ghostContainer,
                    text: styles.ghostText,
                    shadow: { backgroundColor: 'transparent' },
                };
            default:
                return {
                    container: styles.disabledContainer,
                    text: styles.disabledText,
                    shadow: { backgroundColor: theme.colors.border },
                };
        }
    };

    const getSizeStyles = () => {
        switch (size) {
            case 'sm': return styles.sm;
            case 'lg': return styles.lg;
            default: return styles.md;
        }
    };

    const variantStyles = getVariantStyles();

    return (
        <View style={[styles.wrapper, fullWidth && styles.fullWidth, style]}>
            {/* 3D Shadow Layer */}
            <View style={[styles.shadowLayer, variantStyles.shadow, getSizeStyles()]} />
            
            {/* Button Face */}
            <Animated.View style={{ transform: [{ translateY }] }}>
                <TouchableOpacity
                    onPress={handlePress}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    disabled={disabled || variant === 'disabled'}
                    activeOpacity={0.9}
                    style={[
                        styles.button,
                        variantStyles.container,
                        getSizeStyles(),
                        fullWidth && styles.fullWidth,
                    ]}
                >
                    <Text style={[styles.text, variantStyles.text]}>
                        {children}
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
    },
    fullWidth: {
        width: '100%',
    },
    shadowLayer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%',
        borderRadius: theme.borderRadius.md,
        transform: [{ translateY: 4 }],
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.borderRadius.md,
    },
    text: {
        fontWeight: '600',
        fontSize: 15,
    },
    // Sizes
    sm: { paddingVertical: 10, paddingHorizontal: 16 },
    md: { paddingVertical: 14, paddingHorizontal: 24 },
    lg: { paddingVertical: 18, paddingHorizontal: 32, borderRadius: theme.borderRadius.lg },
    // Variants
    primaryContainer: { backgroundColor: theme.colors.primary },
    primaryText: { color: '#fff' },
    successContainer: { backgroundColor: theme.colors.success },
    successText: { color: '#fff' },
    dangerContainer: { backgroundColor: theme.colors.error },
    dangerText: { color: '#fff' },
    secondaryContainer: { backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.border },
    secondaryText: { color: theme.colors.text },
    outlineContainer: { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: theme.colors.border },
    outlineText: { color: theme.colors.textSecondary },
    ghostContainer: { backgroundColor: 'transparent' },
    ghostText: { color: theme.colors.textSecondary },
    disabledContainer: { backgroundColor: theme.colors.surfaceVariant },
    disabledText: { color: theme.colors.textLight },
});

export default Button;
```

---

## 📚 Learn Screen (`src/screens/LearnScreen.tsx`)

```typescript
import React, { useState, useEffect } from 'react';
import { 
    View, Text, ScrollView, TouchableOpacity, StyleSheet, 
    Dimensions, RefreshControl 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { 
    Star, BookOpen, Trophy, Flame, Zap, Lock, Crown, CheckCircle,
    MessageCircle, Hash, Palette, Clock, Users, ShoppingBag,
    MapPin, Cloud, Utensils, Plane, Smartphone, Briefcase
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';

import { theme, unitColors } from '../styles/theme';
import { useLanguage } from '../context/LanguageContext';
import { unit1 } from '../data/courses/unit1';
import { unit2 } from '../data/courses/unit2';
import { unit3 } from '../data/courses/unit3';
import { unit4 } from '../data/courses/unit4';
import { isLessonCompleted, isLessonUnlocked, getUserStats, isUnitCompleted } from '../utils/progressManager';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const NODE_SIZE = 70;

const LearnScreen: React.FC = () => {
    const navigation = useNavigation();
    const { t } = useLanguage();
    const [units] = useState([unit1, unit2, unit3, unit4]);
    const [userStats, setUserStats] = useState(getUserStats());
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        setUserStats(getUserStats());
        setRefreshing(false);
    };

    // Icon mapping based on lesson title
    const getLessonIcon = (title: string) => {
        const t = title?.toLowerCase() || '';
        if (t.includes('basics')) return Star;
        if (t.includes('greeting')) return MessageCircle;
        if (t.includes('number')) return Hash;
        if (t.includes('color')) return Palette;
        if (t.includes('time')) return Clock;
        if (t.includes('family')) return Users;
        if (t.includes('shop')) return ShoppingBag;
        if (t.includes('direction')) return MapPin;
        if (t.includes('weather')) return Cloud;
        if (t.includes('food') || t.includes('dining')) return Utensils;
        if (t.includes('travel')) return Plane;
        if (t.includes('tech')) return Smartphone;
        if (t.includes('business') || t.includes('work')) return Briefcase;
        return Star;
    };

    const handleLessonPress = (lessonId: string, isLocked: boolean) => {
        if (isLocked) {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
            return;
        }
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        navigation.navigate('Lesson' as never, { lessonId } as never);
    };

    // Calculate zig-zag position
    const getNodePosition = (index: number) => {
        const centerX = SCREEN_WIDTH / 2 - NODE_SIZE / 2;
        const offset = 50;
        switch (index % 4) {
            case 0: return centerX;
            case 1: return centerX + offset;
            case 2: return centerX;
            case 3: return centerX - offset;
            default: return centerX;
        }
    };

    return (
        <ScrollView 
            style={styles.container}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            {/* Stats Bar */}
            <View style={styles.statsBar}>
                <View style={styles.statItem}>
                    <Flame color="#ff9600" fill="#ff9600" size={24} />
                    <Text style={styles.statValue}>{userStats.streak}</Text>
                </View>
                <View style={styles.statItem}>
                    <Zap color="#ffc800" fill="#ffc800" size={24} />
                    <Text style={styles.statValue}>{userStats.totalXp}</Text>
                </View>
            </View>

            {/* Units */}
            {units.map((unit, unitIndex) => {
                const colors = unitColors[unit.id] || unitColors['unit-1'];
                
                return (
                    <View key={unit.id} style={styles.unitSection}>
                        {/* Unit Header */}
                        <View style={[styles.unitHeader, { backgroundColor: colors.primary }]}>
                            <View style={styles.unitInfo}>
                                <Text style={styles.unitTitle}>{unit.title}</Text>
                                <Text style={styles.unitDescription}>{unit.description}</Text>
                            </View>
                            <TouchableOpacity 
                                style={styles.guidebookBtn}
                                onPress={() => navigation.navigate('Guidebook' as never, { unitId: unit.id } as never)}
                            >
                                <BookOpen size={18} color="#fff" />
                                <Text style={styles.guidebookText}>{t('guidebook')}</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Learning Path */}
                        <View style={styles.pathContainer}>
                            {unit.lessons.map((lesson, index) => {
                                const Icon = getLessonIcon(lesson.title);
                                const completed = isLessonCompleted(lesson.id);
                                const unlocked = isLessonUnlocked(lesson.id, unit.lessons);
                                const isCurrent = unlocked && !completed;
                                const isLocked = !unlocked;
                                const leftPosition = getNodePosition(index);

                                return (
                                    <View 
                                        key={lesson.id}
                                        style={[styles.nodeWrapper, { left: leftPosition }]}
                                    >
                                        <TouchableOpacity
                                            onPress={() => handleLessonPress(lesson.id, isLocked)}
                                            activeOpacity={isLocked ? 1 : 0.8}
                                            style={[
                                                styles.nodeCircle,
                                                completed && { backgroundColor: colors.primary },
                                                isCurrent && { 
                                                    backgroundColor: colors.primary,
                                                    borderWidth: 4,
                                                    borderColor: colors.light,
                                                },
                                                isLocked && styles.nodeLocked,
                                            ]}
                                        >
                                            {isLocked ? (
                                                <Lock size={28} color={theme.colors.textLight} />
                                            ) : (
                                                <Icon size={32} color="#fff" />
                                            )}
                                            
                                            {completed && (
                                                <View style={styles.completedBadge}>
                                                    <CheckCircle size={18} color="#fff" fill={colors.primary} />
                                                </View>
                                            )}
                                            
                                            {isCurrent && (
                                                <View style={styles.crownBadge}>
                                                    <Crown size={16} color="#b45309" fill="#fbbf24" />
                                                </View>
                                            )}
                                        </TouchableOpacity>
                                        
                                        <Text style={styles.nodeLabel}>{lesson.title}</Text>
                                    </View>
                                );
                            })}

                            {/* Trophy Node */}
                            <View style={[styles.nodeWrapper, { left: SCREEN_WIDTH / 2 - NODE_SIZE / 2 }]}>
                                <View style={[
                                    styles.trophyNode,
                                    isUnitCompleted(unit.lessons) && { backgroundColor: colors.primary }
                                ]}>
                                    <Trophy 
                                        size={40} 
                                        color={isUnitCompleted(unit.lessons) ? "#fbbf24" : theme.colors.textLight}
                                        fill={isUnitCompleted(unit.lessons) ? "#fbbf24" : "transparent"}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                );
            })}

            <View style={{ height: 100 }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    statsBar: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 16,
        gap: 20,
        backgroundColor: theme.colors.surface,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    statValue: {
        fontSize: 16,
        fontWeight: '700',
        color: theme.colors.text,
    },
    unitSection: {
        marginBottom: 20,
    },
    unitHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        marginHorizontal: 16,
        marginTop: 16,
        borderRadius: theme.borderRadius.xl,
    },
    unitInfo: {
        flex: 1,
    },
    unitTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 4,
    },
    unitDescription: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.9)',
    },
    guidebookBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: theme.borderRadius.full,
    },
    guidebookText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },
    pathContainer: {
        paddingVertical: 30,
        minHeight: 400,
    },
    nodeWrapper: {
        position: 'absolute',
        alignItems: 'center',
        marginBottom: 30,
    },
    nodeCircle: {
        width: NODE_SIZE,
        height: NODE_SIZE,
        borderRadius: NODE_SIZE / 2,
        backgroundColor: theme.colors.surfaceVariant,
        justifyContent: 'center',
        alignItems: 'center',
        ...theme.shadows.md,
    },
    nodeLocked: {
        backgroundColor: theme.colors.surfaceVariant,
        opacity: 0.7,
    },
    completedBadge: {
        position: 'absolute',
        top: -4,
        right: -4,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    crownBadge: {
        position: 'absolute',
        top: -10,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 2,
    },
    nodeLabel: {
        marginTop: 8,
        fontSize: 12,
        fontWeight: '500',
        color: theme.colors.textSecondary,
        textAlign: 'center',
        maxWidth: 100,
    },
    trophyNode: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: theme.colors.surfaceVariant,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: theme.colors.border,
    },
});

export default LearnScreen;
```

---

## 📝 Lesson Screen (`src/screens/LessonScreen.tsx`)

The Lesson screen is the most complex component. It must implement ALL exercise types:

### Exercise Types to Implement:
1. **MultipleChoice** - Select correct translation with icon/image
2. **SentenceBuilder** - Drag/tap words to build sentences
3. **MatchPairs** - Tap matching Kurdish-English pairs
4. **FillBlank** - Fill in the missing word
5. **Typing** - Type the translation
6. **ImageSelection** - Select correct image
7. **Conversation** - Complete dialogue exercises
8. **CulturalNote** - Read cultural content with quiz
9. **VocabularyGrid** - Learn vocabulary items
10. **ImageMatch** - Match images to words
11. **StoryCompletion** - Fill blanks in a story
12. **RoleplayChat** - AI-style chat simulation

### Key Features:
- Progress bar at top
- Lives counter (hearts)
- Haptic feedback on all interactions
- Animated feedback sheet (correct/incorrect)
- XP reward on completion
- Auto-advance after correct answer

### Implementation Pattern:

```typescript
// Each exercise component follows this pattern:
interface ExerciseProps {
    exercise: Exercise;
    onAnswer: (isCorrect: boolean) => void;
}

const MultipleChoice: React.FC<ExerciseProps> = ({ exercise, onAnswer }) => {
    const [selected, setSelected] = useState<ExerciseOption | null>(null);
    const [shuffledOptions, setShuffledOptions] = useState(() => 
        shuffleArray([...exercise.options])
    );

    // Reset on exercise change
    useEffect(() => {
        setShuffledOptions(shuffleArray([...exercise.options]));
        setSelected(null);
    }, [exercise.id]);

    const handleSelect = (option: ExerciseOption) => {
        Haptics.selectionAsync();
        setSelected(option);
    };

    const handleCheck = () => {
        if (!selected) return;
        onAnswer(selected.correct);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.question}>{exercise.question}</Text>
            <View style={styles.optionsGrid}>
                {shuffledOptions.map((opt, idx) => (
                    <TouchableOpacity
                        key={idx}
                        style={[
                            styles.optionCard,
                            selected === opt && styles.optionSelected
                        ]}
                        onPress={() => handleSelect(opt)}
                    >
                        {opt.image && <IconRenderer emoji={opt.image} size={48} />}
                        <Text style={styles.optionText}>{opt.text}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Button 
                variant={selected ? 'primary' : 'disabled'}
                size="lg"
                fullWidth
                onPress={handleCheck}
            >
                {t('check')}
            </Button>
        </View>
    );
};
```

---

## 🔧 Progress Manager (`src/utils/progressManager.ts`)

```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'kurdlingo-user-progress';

export interface LessonProgress {
    lessonId: string;
    completedAt: string;
    xpEarned: number;
    attempts: number;
}

export interface UserProgress {
    units: { [unitId: string]: { lessonsCompleted: string[] } };
    totalXp: number;
    currentStreak: number;
    lastActiveDate: string;
    lessonsCompleted: { [lessonId: string]: LessonProgress };
}

const defaultProgress: UserProgress = {
    units: {},
    totalXp: 0,
    currentStreak: 0,
    lastActiveDate: new Date().toISOString().split('T')[0],
    lessonsCompleted: {}
};

export const getUserProgress = async (): Promise<UserProgress> => {
    try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : { ...defaultProgress };
    } catch {
        return { ...defaultProgress };
    }
};

export const saveUserProgress = async (progress: UserProgress): Promise<void> => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const isLessonCompleted = async (lessonId: string): Promise<boolean> => {
    const progress = await getUserProgress();
    return !!progress.lessonsCompleted[lessonId];
};

export const isLessonUnlocked = async (
    lessonId: string, 
    unitLessons: { id: string }[]
): Promise<boolean> => {
    const lessonIndex = unitLessons.findIndex(l => l.id === lessonId);
    if (lessonIndex === 0) return true;
    
    const previousLessonId = unitLessons[lessonIndex - 1]?.id;
    if (!previousLessonId) return false;
    
    return isLessonCompleted(previousLessonId);
};

export const completeLesson = async (
    lessonId: string, 
    unitId: string, 
    xpEarned: number = 10
): Promise<UserProgress> => {
    const progress = await getUserProgress();
    const today = new Date().toISOString().split('T')[0];
    
    if (!progress.lessonsCompleted[lessonId]) {
        progress.lessonsCompleted[lessonId] = {
            lessonId,
            completedAt: new Date().toISOString(),
            xpEarned,
            attempts: 1
        };
        progress.totalXp += xpEarned;
    } else {
        progress.lessonsCompleted[lessonId].attempts++;
    }
    
    if (!progress.units[unitId]) {
        progress.units[unitId] = { lessonsCompleted: [] };
    }
    if (!progress.units[unitId].lessonsCompleted.includes(lessonId)) {
        progress.units[unitId].lessonsCompleted.push(lessonId);
    }
    
    // Update streak
    if (progress.lastActiveDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        
        progress.currentStreak = progress.lastActiveDate === yesterdayStr 
            ? progress.currentStreak + 1 
            : 1;
        progress.lastActiveDate = today;
    }
    
    await saveUserProgress(progress);
    return progress;
};

export const getUserStats = async () => {
    const progress = await getUserProgress();
    return {
        totalXp: progress.totalXp,
        streak: progress.currentStreak,
        lessonsCompleted: Object.keys(progress.lessonsCompleted).length
    };
};

// Sync version for initial renders
export const getUserStatsSync = (): { totalXp: number; streak: number; lessonsCompleted: number } => {
    return { totalXp: 0, streak: 0, lessonsCompleted: 0 };
};
```

---

## 📖 Translations Data (`src/data/translations.ts`)

```typescript
// COPY EXACTLY FROM WEB APP
export const translations = {
    en: {
        // Navigation
        learn: "Learn",
        practice: "Practice",
        leaderboards: "Leaderboards",
        quests: "Quests",
        shop: "Shop",
        profile: "Profile",
        more: "More",
        guidebook: "Guidebook",
        
        // Lesson
        check: "Check",
        continue: "Continue",
        correct: "Correct!",
        incorrect: "Incorrect",
        correctSolution: "Correct solution:",
        matchPairs: "Tap the matching pairs",
        
        // Stats
        dayStreak: "Day Streak",
        totalXp: "Total XP",
        lessonsCompleted: "Lessons",
        
        // ... (copy all translations from web app)
    },
    ckb: {
        // Navigation
        learn: "فێربوون",
        practice: "ڕاهێنان",
        leaderboards: "ڕیزبەندی",
        quests: "ئەرکەکان",
        shop: "فرۆشگا",
        profile: "پرۆفایل",
        more: "زیاتر",
        guidebook: "ڕێبەر",
        
        // Lesson
        check: "پشکنین",
        continue: "بەردەوامبە",
        correct: "ڕاستە!",
        incorrect: "هەڵەیە",
        correctSolution: "وەڵامی ڕاست:",
        matchPairs: "جوتەکان لێک بدە",
        
        // Stats
        dayStreak: "ڕۆژ لەسەریەک",
        totalXp: "کۆی خاڵەکان",
        lessonsCompleted: "وانە",
        
        // ... (copy all translations from web app)
    }
};
```

---

## 📚 Course Data

**IMPORTANT:** Copy ALL course data files exactly from the web app:
- `src/data/courses/unit1.ts`
- `src/data/courses/unit2.ts`
- `src/data/courses/unit3.ts`
- `src/data/courses/unit4.ts`

The data structure is identical and should work without modification.

---

## 🎯 Implementation Checklist

### Phase 1: Project Setup
- [ ] Initialize Expo project with TypeScript
- [ ] Install all dependencies
- [ ] Set up folder structure
- [ ] Configure theme and design tokens
- [ ] Load Kurdish fonts

### Phase 2: Core Infrastructure
- [ ] Implement LanguageContext with RTL support
- [ ] Set up AsyncStorage progress manager
- [ ] Create navigation structure
- [ ] Build reusable Button component

### Phase 3: Main Screens
- [ ] Landing screen with language toggle
- [ ] Learn screen with unit path visualization
- [ ] Leaderboard screen
- [ ] Quests screen
- [ ] Shop screen
- [ ] Profile screen with font selector

### Phase 4: Lesson System (Most Complex)
- [ ] Lesson screen framework (header, progress, lives)
- [ ] MultipleChoice exercise
- [ ] SentenceBuilder exercise (drag/tap)
- [ ] MatchPairs exercise
- [ ] FillBlank exercise
- [ ] Typing exercise
- [ ] ImageSelection exercise
- [ ] Conversation exercise
- [ ] CulturalNote exercise
- [ ] VocabularyGrid exercise
- [ ] ImageMatch exercise
- [ ] StoryCompletion exercise
- [ ] RoleplayChat exercise
- [ ] Feedback sheet animation
- [ ] Completion screen with XP

### Phase 5: Guidebook System
- [ ] Guidebook hub screen
- [ ] Guidebook detail screen
- [ ] Visual components (sentence structure, pronoun grid, etc.)
- [ ] Key phrases section

### Phase 6: Polish & Testing
- [ ] Haptic feedback throughout
- [ ] Animations (Reanimated)
- [ ] RTL layout testing
- [ ] iOS and Android testing
- [ ] Performance optimization

---

## 🎨 Key UI/UX Requirements

1. **3D Buttons** - All primary buttons must have the 3D press effect with shadow layer
2. **Haptic Feedback** - Every tap should provide tactile feedback
3. **RTL Support** - Full RTL layout when Kurdish is selected
4. **Kurdish Font** - Use Rabar_039 font for all Kurdish text
5. **Smooth Animations** - Use Reanimated for 60fps animations
6. **Duolingo-style Path** - Zig-zag lesson path with locked/current/completed states
7. **Feedback Sheet** - Slide-up sheet for correct/incorrect feedback
8. **Progress Persistence** - All progress saved locally

---

## 📦 App Entry Point (`App.tsx`)

```typescript
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LanguageProvider } from './src/context/LanguageContext';
import { AppNavigator } from './src/navigation/AppNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'Rabar_039': require('./assets/fonts/Rabar_039.ttf'),
            });
            setFontsLoaded(true);
            await SplashScreen.hideAsync();
        };
        loadFonts();
    }, []);

    if (!fontsLoaded) return null;

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <LanguageProvider>
                <StatusBar style="auto" />
                <AppNavigator />
            </LanguageProvider>
        </GestureHandlerRootView>
    );
}
```

---

## 🚀 Commands to Run

```bash
# Create new Expo project
npx create-expo-app kurdlingo-mobile -t expo-template-blank-typescript

# Navigate to project
cd kurdlingo-mobile

# Install dependencies
npx expo install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated @react-native-async-storage/async-storage react-native-svg expo-haptics expo-font expo-av

# Install Lucide icons
npm install lucide-react-native

# Start development
npx expo start
```

---

## 📝 Final Notes

1. **Data Compatibility**: All course data (unit1-4) should be copied directly from the web app - the structure is identical.

2. **Icon Mapping**: Use lucide-react-native which provides the same icons as the web version.

3. **Async Storage**: Replace all localStorage calls with AsyncStorage.

4. **RTL Handling**: React Native handles RTL differently - use I18nManager and style properties like `start`/`end` instead of `left`/`right`.

5. **Font Loading**: Load the Kurdish font before rendering any Kurdish text.

6. **Testing**: Test thoroughly on both iOS and Android, especially RTL layouts.

---

**Created for AI Assistant Implementation**  
**Version:** 1.0  
**Last Updated:** November 2025
