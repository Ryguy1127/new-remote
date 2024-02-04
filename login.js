<TouchableOpacity 
  style={styles.sendButton}
  onPress={async () => {
    console.log(phoneNumber + ' Button was pressed');
    
    // Add your modification here
    const name = 'Ryan'; // Changed the name to Ryan
    Alert.alert('Hello ' + name);
    
    const sendTextResponse = await fetch(
      'https://dev.stedi.me/twofactorlogin/' + phoneNumber,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/text'
        }
      }
    );
    const sendTextResponseData = await sendTextResponse.text();
    if (sendTextResponse.status != 200) { // invalid phone number, send them to the signup page
      await Alert.alert('Did you type your number correctly? ' + phoneNumber);
    } else {
      setLoggedInState(loggedInStates.LOGGING_IN);
    }
  }}
>
  <Text style={{color: 'white'}}>Send</Text>
</TouchableOpacity>
