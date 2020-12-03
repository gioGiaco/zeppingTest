
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image, ImageBackground, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/sfondo.jpg')}
      style={styles.styleSfondo}>

      <ScrollView>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>

          <Image
            source={require('./assets/drawer.png')}
            style={styles.styleDrawer}
          />
          <Image
            source={require('./assets/Benvenuto.png')}
            style={styles.styleBenvenuto}
          />
          <Text style={styles.title}>Mario Rossi</Text>
          <Image
            source={require('./assets/profilo.png')}
            style={styles.styleProfilo}
          />
          <Text style={styles.text}>Le tue incubazioni</Text>


          <View style={styles.backgroundCard}>

            <View style={styles.styleSubtitle}>
              <Text style={styles.subtitle}>IN CORSO</Text>
              <Text style={styles.subtitle}>CONCLUSE</Text>
            </View>

            <View style={styles.styleLine}>
              <View
                style={{
                  borderBottomColor: '#FF7B7B',
                  borderBottomWidth: 3,
                  width: 90,
                  marginHorizontal: 35,
                }}
              />
              <View
                style={{
                  borderBottomColor: '#F4F4F4',
                  borderBottomWidth: 3,
                  width: 90,
                  marginHorizontal: 35,
                }}
              />
            </View>

            <Card style={styles.card}>
              <View style={styles.viewCardAdd}>
                <Image
                  source={require('./assets/add.png')}
                  style={{ width: 50, height: 50, marginEnd: 20 }}
                />
                <Text style={styles.textItemTitle}>Nuova incubata</Text>
              </View>
            </Card>

            <Card style={styles.card}>
              <View style={styles.viewCardItem}>
                <Image
                  source={require('./assets/item.png')}
                  style={{ width: 100, height: 100, marginStart: 20 }}
                />
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.textItemTitleSmall}>Pulcini</Text>
                  <Text style={styles.textItem}>01-01/21-01</Text>
                  <Text style={styles.textItem}>Capacità: 10/21</Text>
                  <Text style={styles.textItem}>-21 giorni</Text>
                </View>
              </View>
              <Text style={styles.textItemSmall}>
                Tap per visualizzare maggiori informazioni
          </Text>
            </Card>

            <Card style={styles.card}>
              <View style={styles.viewCardItem}>
                <Image
                  source={require('./assets/item.png')}
                  style={{ width: 100, height: 100, marginStart: 20 }}
                />
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.textItemTitleSmall}>Pulcini</Text>
                  <Text style={styles.textItem}>01-01/21-01</Text>
                  <Text style={styles.textItem}>Capacità: 10/21</Text>
                  <Text style={styles.textItem}>-21 giorni</Text>
                </View>
              </View>
              <Text style={styles.textItemSmall}>
                Tap per visualizzare maggiori informazioni
          </Text>
            </Card>

            <Card style={styles.card}>
              <View style={styles.viewCardItem}>
                <Image
                  source={require('./assets/item.png')}
                  style={{ width: 100, height: 100, marginStart: 20 }}
                />
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.textItemTitleSmall}>Pulcini</Text>
                  <Text style={styles.textItem}>01-01/21-01</Text>
                  <Text style={styles.textItem}>Capacità: 10/21</Text>
                  <Text style={styles.textItem}>-21 giorni</Text>
                </View>
              </View>
              <Text style={styles.textItemSmall}>
                Tap per visualizzare maggiori informazioni
          </Text>
            </Card>

          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundCard: {
    flex: 1,
    marginTop: 16,
    backgroundColor: '#F4F4F4',
    borderTopLeftRadius: 80 / 2,
    borderTopRightRadius: 80 / 2,
  },
  styleSfondo: {
    alignItems: 'center',
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  styleDrawer: {
    marginTop: 10,
    width: 32,
    height: 32,
    position: 'absolute',
    top: 50,
    end: 20,
  },
  styleBenvenuto: {
    marginTop: 100,
    width: 204,
    height: 64,
  },
  styleProfilo: {
    marginTop: 10,
    width: 74,
    height: 74,
    borderRadius: 150 / 2,
    overflow: 'hidden'
  },
  styleSubtitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
    width: Dimensions.get('window').width - 40,
    height: (Dimensions.get('window').width - 40) / 2,
    marginHorizontal: 20,
    elevation: 16,
  },
  viewCardAdd: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewCardItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // text style

  title: {
    fontSize: 24,
    color: '#FF7B7B',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    padding: 8,
    marginHorizontal: 30,
    textAlign: 'center',
    marginTop: 10,
    color: '#6C6C6C'
  },
  text: {
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 10,
    color: '#4B4B4B',
    textAlign: 'center',
  },
  textItemTitle: {
    fontSize: 24,
    color: '#c8cbcc',
    fontWeight: 'bold'
  },
  textItem: {
    fontSize: 16,
    padding: 2,
    textAlign: 'right',
    color: '#c8cbcc',
    marginEnd: 8,
  },
  textItemTitleSmall: {
    fontSize: 16,
    padding: 2,
    textAlign: 'right',
    marginEnd: 8,
  },
  textItemSmall: {
    fontSize: 14,
    padding: 2,
    textAlign: 'center',
    color: '#c8cbcc',
    marginBottom: 12,
  }
});
