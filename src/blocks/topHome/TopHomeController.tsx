import {Component} from 'react';
interface IProps {
  navigation?: any;
}
interface IState {
  indexImage: number;
  productsData: any;
  apiError: string;
}
import {baseUrl} from './TopHomeConfig';
export class TopHomeController extends Component<IProps, IState> {
  state = {
    indexImage: 0,
    productsData: [],
    apiError: '',
  };
  componentDidMount(): void {
    this.getProductsData();
    setInterval(() => {
      const {indexImage} = this.state;
      if (indexImage === 2) {
        this.setState({indexImage: 0});
      } else {
        this.setState({indexImage: this.state.indexImage + 1});
      }
    }, 1000);
  }
  getProductsData = async () => {
    const url = baseUrl + '/products';
    const response = await fetch(url);
    const data = await response.json();
    console.log(response);
    if (response.ok) {
      this.setState({productsData: data.products});
    } else {
      this.setState({apiError: data.error});
    }
  };
}

export default TopHomeController;
