import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

// ♠ ♥ ♦ ♣ 

export default function App() {
  const initialDeck = [
    {suit: '♠', rank: '2', color: 'black'},
    {suit: '♠', rank: '3', color: 'black'},
    {suit: '♠', rank: '4', color: 'black'},
    {suit: '♠', rank: '5', color: 'black'},
    {suit: '♠', rank: '6', color: 'black'},
    {suit: '♠', rank: '7', color: 'black'},
    {suit: '♠', rank: '8', color: 'black'},
    {suit: '♠', rank: '9', color: 'black'},
    {suit: '♠', rank: '10', color: 'black'},
    {suit: '♠', rank: 'J', color: 'black'},
    {suit: '♠', rank: 'Q', color: 'black'},
    {suit: '♠', rank: 'K', color: 'black'},
    {suit: '♠', rank: 'A', color: 'black'},
    
    {suit: '♥', rank: '2', color: 'red'},
    {suit: '♥', rank: '3', color: 'red'},
    {suit: '♥', rank: '4', color: 'red'},
    {suit: '♥', rank: '5', color: 'red'},
    {suit: '♥', rank: '6', color: 'red'},
    {suit: '♥', rank: '7', color: 'red'},
    {suit: '♥', rank: '8', color: 'red'},
    {suit: '♥', rank: '9', color: 'red'},
    {suit: '♥', rank: '10', color: 'red'},
    {suit: '♥', rank: 'J', color: 'red'},
    {suit: '♥', rank: 'Q', color: 'red'},
    {suit: '♥', rank: 'K', color: 'red'},
    {suit: '♥', rank: 'A', color: 'red'},
    
    {suit: '♦', rank: '2', color: 'red'},
    {suit: '♦', rank: '3', color: 'red'},
    {suit: '♦', rank: '4', color: 'red'},
    {suit: '♦', rank: '5', color: 'red'},
    {suit: '♦', rank: '6', color: 'red'},
    {suit: '♦', rank: '7', color: 'red'},
    {suit: '♦', rank: '8', color: 'red'},
    {suit: '♦', rank: '9', color: 'red'},
    {suit: '♦', rank: '10', color: 'red'},
    {suit: '♦', rank: 'J', color: 'red'},
    {suit: '♦', rank: 'Q', color: 'red'},
    {suit: '♦', rank: 'K', color: 'red'},
    {suit: '♦', rank: 'A', color: 'red'},
    
    {suit: '♣', rank: '2', color: 'black'},
    {suit: '♣', rank: '3', color: 'black'},
    {suit: '♣', rank: '4', color: 'black'},
    {suit: '♣', rank: '5', color: 'black'},
    {suit: '♣', rank: '6', color: 'black'},
    {suit: '♣', rank: '7', color: 'black'},
    {suit: '♣', rank: '8', color: 'black'},
    {suit: '♣', rank: '9', color: 'black'},
    {suit: '♣', rank: '10', color: 'black'},
    {suit: '♣', rank: 'J', color: 'black'},
    {suit: '♣', rank: 'Q', color: 'black'},
    {suit: '♣', rank: 'K', color: 'black'},
    {suit: '♣', rank: 'A', color: 'black'}
    
  ];

  const [deck, setDeck] = useState([
    {suit: '♠', rank: '2', color: 'black'},
    {suit: '♠', rank: '3', color: 'black'},
    {suit: '♠', rank: '4', color: 'black'},
    {suit: '♠', rank: '5', color: 'black'},
    {suit: '♠', rank: '6', color: 'black'},
    {suit: '♠', rank: '7', color: 'black'},
    {suit: '♠', rank: '8', color: 'black'},
    {suit: '♠', rank: '9', color: 'black'},
    {suit: '♠', rank: '10', color: 'black'},
    {suit: '♠', rank: 'J', color: 'black'},
    {suit: '♠', rank: 'Q', color: 'black'},
    {suit: '♠', rank: 'K', color: 'black'},
    {suit: '♠', rank: 'A', color: 'black'},
    
    {suit: '♥', rank: '2', color: 'red'},
    {suit: '♥', rank: '3', color: 'red'},
    {suit: '♥', rank: '4', color: 'red'},
    {suit: '♥', rank: '5', color: 'red'},
    {suit: '♥', rank: '6', color: 'red'},
    {suit: '♥', rank: '7', color: 'red'},
    {suit: '♥', rank: '8', color: 'red'},
    {suit: '♥', rank: '9', color: 'red'},
    {suit: '♥', rank: '10', color: 'red'},
    {suit: '♥', rank: 'J', color: 'red'},
    {suit: '♥', rank: 'Q', color: 'red'},
    {suit: '♥', rank: 'K', color: 'red'},
    {suit: '♥', rank: 'A', color: 'red'},
    
    {suit: '♦', rank: '2', color: 'red'},
    {suit: '♦', rank: '3', color: 'red'},
    {suit: '♦', rank: '4', color: 'red'},
    {suit: '♦', rank: '5', color: 'red'},
    {suit: '♦', rank: '6', color: 'red'},
    {suit: '♦', rank: '7', color: 'red'},
    {suit: '♦', rank: '8', color: 'red'},
    {suit: '♦', rank: '9', color: 'red'},
    {suit: '♦', rank: '10', color: 'red'},
    {suit: '♦', rank: 'J', color: 'red'},
    {suit: '♦', rank: 'Q', color: 'red'},
    {suit: '♦', rank: 'K', color: 'red'},
    {suit: '♦', rank: 'A', color: 'red'},
    
    {suit: '♣', rank: '2', color: 'black'},
    {suit: '♣', rank: '3', color: 'black'},
    {suit: '♣', rank: '4', color: 'black'},
    {suit: '♣', rank: '5', color: 'black'},
    {suit: '♣', rank: '6', color: 'black'},
    {suit: '♣', rank: '7', color: 'black'},
    {suit: '♣', rank: '8', color: 'black'},
    {suit: '♣', rank: '9', color: 'black'},
    {suit: '♣', rank: '10', color: 'black'},
    {suit: '♣', rank: 'J', color: 'black'},
    {suit: '♣', rank: 'Q', color: 'black'},
    {suit: '♣', rank: 'K', color: 'black'},
    {suit: '♣', rank: 'A', color: 'black'}
    
  ])
  const [position, setPosition] = useState(0);

  const nextCard = () => {
    if(position !== (deck.length - 1)) {
      setPosition(position + 1);
      console.log(position);
    }
    else {
      Alert.alert(
        'End of Deck',
        "You've reached the end of the deck!",
        [
          {text: 'Shuffle', onPress:() => shuffleDeck()},
          {text: 'Re-use Deck', onPress:() => setPosition(0)}
        ],
        {cancelable: false}
      )
      console.log('back to start');
    }
  }

  const shuffleDeck = () => {
    var currentIndex = deck.length, temporaryValue, randomIndex;
    var shuffled = deck;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = shuffled[currentIndex];
      shuffled[currentIndex] = shuffled[randomIndex];
      shuffled[randomIndex] = temporaryValue;
    }
    setDeck(shuffled);
    setPosition(0);
  }

  const orderDeck = () => {
    if(deck.length === 54) {
      setDeck([...initialDeck, {suit: '🤡', rank: '🤡', color: 'blue'}, {suit: '🤡', rank: '🤡'} ]);
    } else {
      setDeck(initialDeck);
    }
    setPosition(0);
  }

  const [jokerText, setJokerText] = useState('Add Jokers');
  const toggleJokers = () => {
    if(deck.length === 52) {
      setDeck([...initialDeck, {suit: '🤡', rank: '🤡', color: 'blue'}, {suit: '🤡', rank: '🤡'} ]);
      setJokerText('Remove Jokers');
    } else {
      setDeck(initialDeck);
      setJokerText('Add Jokers')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Text style={[{color:deck[position].color}, styles.rank]}>{deck[position].rank}</Text>
      <Text style={[{color:deck[position].color}, styles.suit]}>{deck[position].suit}</Text>
      <Text style={[{color:deck[position].color}, styles.rank, styles.right]}>{deck[position].rank}</Text>
      </View>
      <Button title="Next" onPress={() => nextCard()} />
      <Button title="Shuffle" onPress={() => shuffleDeck()} />
      <Button title="Order Deck" onPress={() => orderDeck()} />
      <Button title={jokerText} onPress={() => toggleJokers()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: 300,
    height: 450,
    borderWidth: 1,
    borderColor: '#999'
  },
  rank: {
    fontSize: 50,
    margin: 20
  },
  suit: {
    fontSize: 100,
    flex: 1,
    textAlign: 'center',
    paddingVertical: '20%'
  },
  right: {
    alignSelf: 'flex-end'
  }
});
