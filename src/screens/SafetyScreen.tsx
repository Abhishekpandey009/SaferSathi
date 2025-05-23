import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SafetyScreen = () => {
  const safetyFeatures = [
    {
      id: 'location-sharing',
      title: 'Location Sharing',
      description: 'Share your real-time location with trusted contacts',
      icon: 'map-marker',
    },
    {
      id: 'emergency-contacts',
      title: 'Emergency Contacts',
      description: 'Manage your list of trusted emergency contacts',
      icon: 'account-group',
    },
    {
      id: 'safe-routes',
      title: 'Safe Routes',
      description: 'Get recommendations for safer travel routes',
      icon: 'map-marker-path',
    },
    {
      id: 'check-in',
      title: 'Check-in System',
      description: 'Set up automated check-ins for added safety',
      icon: 'clock-check',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Safety Features</Text>
        <Text style={styles.subtitle}>
          Manage your safety preferences and settings
        </Text>
      </View>

      <View style={styles.features}>
        {safetyFeatures.map((feature) => (
          <TouchableOpacity
            key={feature.id}
            style={styles.featureCard}
            onPress={() => {/* Handle feature activation */}}
          >
            <Icon name={feature.icon} size={24} color="#4F46E5" />
            <View style={styles.featureInfo}>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>
                {feature.description}
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="#6B7280" />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.emergencySection}>
        <Text style={styles.sectionTitle}>Emergency Services</Text>
        <TouchableOpacity
          style={styles.emergencyButton}
          onPress={() => {/* Handle emergency call */}}
        >
          <Icon name="phone" size={24} color="white" />
          <Text style={styles.emergencyButtonText}>
            Call Emergency Services
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 5,
  },
  features: {
    padding: 20,
  },
  featureCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  featureInfo: {
    flex: 1,
    marginLeft: 15,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  featureDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  emergencySection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 15,
  },
  emergencyButton: {
    backgroundColor: '#DC2626',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emergencyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default SafetyScreen;