import { useState } from 'react';
import { ScrollView, StyleSheet, Image, Text, View, TouchableOpacity, Modal, Pressable } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import { TableView, Section } from 'react-native-tableview-simple';
import { useLocalSearchParams } from 'expo-router';

const Menu = () => {
  const searchParams = useLocalSearchParams();
  const items = searchParams.items ? JSON.parse(searchParams.items as string)?.items : [];
  
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageSourcePropType | null>(null);

  const handleItemPress = (image: ImageSourcePropType) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <TableView>
          {items.map((menuSection: any, index: number) => (
            <Section
              key={index}
              header={menuSection.title}
              headerTextStyle={{ fontWeight: 'bold', fontSize: 24 }}
              sectionPaddingBottom={10}
              separatorTintColor="#ccc"
            >
              {menuSection.contents.map((menuItem: any, idx: number) => (
                <TouchableOpacity
                  key={idx}
                  style={styles.cell}
                  onPress={menuItem.available ? () => handleItemPress(menuItem.image) : undefined}
                >
                  <Image source={menuItem.image} style={[styles.image, {opacity: menuItem.available ? 1 : 0.3 }]} />
                  <View style={styles.textContainer}>
                    <Text style={styles.title}>{menuItem.title}</Text>
                    <Text style={styles.price}>£{menuItem.price.toFixed(2)}</Text>
                    <Text style={[styles.availability, 
                      { color: menuItem.available ? 'green' : 'red' }
                    ]}>
                      {menuItem.available ? 'In Stock' : 'Out of Stock'}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </Section>
          ))}
        </TableView>
      </ScrollView>

      {/* Modal for showing larger image */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedImage && (
              <Image source={selectedImage} style={styles.largeImage} />
            )}
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#ccc',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  availability: {
    fontSize: 14,
    marginTop: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  largeImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Menu;
