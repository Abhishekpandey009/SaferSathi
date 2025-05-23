import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to SaferSathi</Text>
        <Text style={styles.subtitle}>Your Personal Safety Companion</Text>
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.sosButton}
          onPress={() => {/* Handle SOS */}}
        >
          <Icon name="alert" size={32} color="white" />
          <Text style={styles.sosText}>SOS</Text>
        </TouchableOpacity>

        <View style={styles.actionGrid}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Book')}
          >
            <Icon name="calendar-check" size={24} color="#4F46E5" />
            <Text style={styles.actionText}>Book Service</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Safety')}
          >
            <Icon name="shield-check" size={24} color="#4F46E5" />
            <Text style={styles.actionText}>Safety Features</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => {/* Handle Location Sharing */}}
          >
            <Icon name="map-marker" size={24} color="#4F46E5" />
            <Text style={styles.actionText}>Share Location</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => {/* Handle Contacts */}}
          >
            <Icon name="account-group" size={24} color="#4F46E5" />
            <Text style={styles.actionText}>Trusted Contacts</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Active Services</Text>
        <View style={styles.serviceCard}>
          <Icon name="shield-check" size={24} color="#4F46E5" />
          <View style={styles.serviceInfo}>
            <Text style={styles.serviceTitle}>Safety Escort</Text>
            <Text style={styles.serviceTime}>Today, 7:00 PM</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#4F46E5" />
        </View>
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
    backgroundColor: '#4F46E5',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 5,
  },
  quickActions: {
    padding: 20,
  },
  sosButton: {
    backgroundColor: '#DC2626',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  sosText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '48%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
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
  actionText: {
    marginTop: 8,
    color: '#1F2937',
    fontSize: 14,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 15,
  },
  serviceCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  serviceInfo: {
    flex: 1,
    marginLeft: 15,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  serviceTime: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
});

export default HomeScreen;