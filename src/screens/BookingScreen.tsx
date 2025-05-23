import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const services = [
  {
    id: 'safety-escort',
    name: 'Safety Escort',
    description: 'Professional escort for safe travel',
    price: '₹499',
    icon: 'shield-check',
  },
  {
    id: 'emergency-response',
    name: 'Emergency Response',
    description: '24/7 emergency response team',
    price: '₹999',
    icon: 'clock-alert',
  },
];

const BookingScreen = () => {
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [location, setLocation] = useState('');

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setDate(selectedTime);
    }
  };

  const handleBooking = () => {
    // Handle booking submission
    console.log({
      selectedService,
      date,
      location,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Book a Service</Text>
        <Text style={styles.subtitle}>
          Choose from our professional safety services
        </Text>
      </View>

      <View style={styles.services}>
        {services.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={[
              styles.serviceCard,
              selectedService === service.id && styles.selectedService,
            ]}
            onPress={() => setSelectedService(service.id)}
          >
            <Icon name={service.icon} size={24} color="#4F46E5" />
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.serviceDescription}>
                {service.description}
              </Text>
            </View>
            <Text style={styles.servicePrice}>{service.price}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.form}>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowDatePicker(true)}
        >
          <Icon name="calendar" size={24} color="#6B7280" />
          <Text style={styles.inputText}>
            {date.toLocaleDateString()}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowTimePicker(true)}
        >
          <Icon name="clock" size={24} color="#6B7280" />
          <Text style={styles.inputText}>
            {date.toLocaleTimeString()}
          </Text>
        </TouchableOpacity>

        <View style={styles.input}>
          <Icon name="map-marker" size={24} color="#6B7280" />
          <TextInput
            style={styles.locationInput}
            placeholder="Enter your location"
            value={location}
            onChangeText={setLocation}
          />
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            onChange={handleDateChange}
          />
        )}

        {showTimePicker && (
          <DateTimePicker
            value={date}
            mode="time"
            onChange={handleTimeChange}
          />
        )}

        <TouchableOpacity
          style={styles.bookButton}
          onPress={handleBooking}
        >
          <Text style={styles.bookButtonText}>Book Now</Text>
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
  services: {
    padding: 20,
  },
  serviceCard: {
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
  selectedService: {
    borderColor: '#4F46E5',
    borderWidth: 2,
  },
  serviceInfo: {
    flex: 1,
    marginLeft: 15,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4F46E5',
  },
  form: {
    padding: 20,
  },
  input: {
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
  inputText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#1F2937',
  },
  locationInput: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#1F2937',
  },
  bookButton: {
    backgroundColor: '#4F46E5',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  bookButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookingScreen;
