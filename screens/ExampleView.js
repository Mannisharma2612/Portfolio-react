import React,{Component} from 'react';
import * as Animatable from 'react-native-animatable';
import { TouchableWithoutFeedback, Text } from 'react-native';

class ExampleView extends Component {
  handleViewRef = ref => this.view = ref;
  
  bounce = () => this.view.bounce(800).then(endState => alert(endState.finished ? 'bounce finished' : 'bounce cancelled'));
  
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.bounce}>
        <Animatable.View ref={this.handleViewRef}>
          <Text style={{textAlign: 'center'}}>Bounce me!</Text>
        </Animatable.View>
      </TouchableWithoutFeedback>
    );
  }
}
export default ExampleView;