import Container from './container';
import Text from './text';
import Button from './button';
import Image from './image'
import Input from './input'
import TextArea from './textarea'
import Arrow from './arrow'
import Dropdown from './dropdown';

export const componentsMap = {
  image:Image,
  container: Container,
  text: Text,
  button: Button,
  textfield: Input,
  textarea:TextArea,
  arrow: Arrow,
  dropdown:Dropdown
};
