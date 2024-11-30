import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { TableView, Section } from 'react-native-tableview-simple';
import HomeScreenCell from '../components/HomeScreenCell';
import { useRouter } from 'expo-router';

const Restaurants = () => {
  const router = useRouter();

  const restaurantData = [
    {
      title: "Joe's Gelato",
      tagline: "Dessert, Ice Cream, £££",
      eta: "10-30 min",
      imgUri: require('../assets/images/ice-cream-header.jpeg'),
      menu: [
        {
          title: 'Gelato',
          contents: [
            {
              title: 'Vanilla',
              image: require('../assets/images/menu/vanilla-gelato.jpeg'),
              price: 3.99,
              available: true,
            },
            {
              title: 'Chocolate',
              image: require('../assets/images/menu/chocolate-gelato.jpeg'),
              price: 4.49,
              available: true,
            },
            {
              title: 'Strawberry',
              image: require('../assets/images/menu/strawberry-gelato.jpeg'),
              price: 4.29,
              available: false,
            },
          ],
        },
        {
          title: 'Drinks',
          contents: [
            {
              title: 'Water',
              image: require('../assets/images/menu/water.jpeg'),
              price: 1.99,
              available: true,
            },
            {
              title: 'Soda',
              image: require('../assets/images/menu/soda.jpeg'),
              price: 2.49,
              available: false,
            },
          ],
        },
      ],
    },
    {
      title: 'Pizza Palace',
      tagline: 'Pizza, Italian, ££',
      eta: '20-40 min',
      imgUri: require('../assets/images/pizza-header.jpeg'),
      menu: [
        {
          title: 'Pizzas',
          contents: [
            {
              title: 'Margherita',
              image: require('../assets/images/menu/margherita-pizza.jpeg'),
              price: 8.99,
              available: true,
            },
            {
              title: 'Pepperoni',
              image: require('../assets/images/menu/pepperoni-pizza.jpeg'),
              price: 9.99,
              available: true,
            },
            {
              title: 'Hawaiian',
              image: require('../assets/images/menu/hawaiian-pizza.jpeg'),
              price: 9.49,
              available: false,
            },
          ],
        },
        {
          title: 'Sides',
          contents: [
            {
              title: 'Garlic Bread',
              image: require('../assets/images/menu/garlic-bread.jpeg'),
              price: 3.49,
              available: true,
            },
            {
              title: 'Salad',
              image: require('../assets/images/menu/salad.jpeg'),
              price: 4.99,
              available: true,
            },
          ],
        },
      ],
    },
    {
      title: 'Burger Bar',
      tagline: 'Burgers, Fast Food, £',
      eta: '15-35 min',
      imgUri: require('../assets/images/burger-header.jpeg'),
      menu: [
        {
          title: 'Burgers',
          contents: [
            {
              title: 'Cheeseburger',
              image: require('../assets/images/menu/cheeseburger.jpeg'),
              price: 5.99,
              available: true,
            },
            {
              title: 'Veggie Burger',
              image: require('../assets/images/menu/veggie-burger.jpeg'),
              price: 6.49,
              available: false,
            },
            {
              title: 'Chicken Burger',
              image: require('../assets/images/menu/chicken-burger.jpeg'),
              price: 6.99,
              available: true,
            },
          ],
        },
        {
          title: 'Sides',
          contents: [
            {
              title: 'Fries',
              image: require('../assets/images/menu/fries.jpeg'),
              price: 2.99,
              available: true,
            },
            {
              title: 'Onion Rings',
              image: require('../assets/images/menu/onion-rings.jpeg'),
              price: 3.49,
              available: false,
            },
          ],
        },
      ],
    },
    {
      title: 'Sushi Spot',
      tagline: 'Sushi, Japanese, ££',
      eta: '25-45 min',
      imgUri: require('../assets/images/sushi-header.jpeg'),
      menu: [
        {
          title: 'Sushi Rolls',
          contents: [
            {
              title: 'California Roll',
              image: require('../assets/images/menu/california-roll.jpeg'),
              price: 7.99,
              available: true,
            },
            {
              title: 'Spicy Tuna Roll',
              image: require('../assets/images/menu/spicy-tuna-roll.jpeg'),
              price: 8.49,
              available: true,
            },
            {
              title: 'Salmon Avocado Roll',
              image: require('../assets/images/menu/salmon-avocado-roll.jpeg'),
              price: 8.99,
              available: false,
            },
          ],
        },
        {
          title: 'Sides',
          contents: [
            {
              title: 'Miso Soup',
              image: require('../assets/images/menu/miso-soup.jpeg'),
              price: 3.99,
              available: true,
            },
            {
              title: 'Edamame',
              image: require('../assets/images/menu/edamame.jpeg'),
              price: 2.99,
              available: true,
            },
          ],
        },
      ],
    },
  ];

  const handlePress = (menuItems: object) => {
    router.push({
      pathname: '/menu',
      params: { items: JSON.stringify(menuItems) },
    });
  };

  return (
    <ScrollView style={styles.container}>
      <TableView>
        <Section sectionPaddingBottom={10} separatorTintColor="#ccc" hideSeparator>
          {restaurantData.map((restaurant, index) => (
            <HomeScreenCell
              key={index}
              title={restaurant.title}
              tagline={restaurant.tagline}
              eta={restaurant.eta}
              imgUri={restaurant.imgUri}
              action={() => handlePress({ items: restaurant.menu })}
            />
          ))}
        </Section>
      </TableView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
  },
});

export default Restaurants;
