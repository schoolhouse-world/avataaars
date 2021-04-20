import React from 'react'

import { BackgroundColorOption, Selector } from '../options'

function makeColor(name: string, color: string) {
  class ColorComponent extends React.Component {
    render() {
      return <rect id={`Background/${name}`} fill={color} x="0" y="0" width="264" height="280" />
    }
  }
  const anyComponent = ColorComponent as any
  anyComponent.displayName = name
  anyComponent.optionValue = name
  return anyComponent
}

export const Black = makeColor('Black', '#262E33')
export const Blue01 = makeColor('Blue01', '#65C9FF')
export const Blue02 = makeColor('Blue02', '#5199E4')
export const Blue03 = makeColor('Blue03', '#25557C')
export const Gray01 = makeColor('Gray01', '#E6E6E6')
export const Gray02 = makeColor('Gray02', '#929598')
export const Heather = makeColor('Heather', '#3C4F5C')
export const PastelBlue = makeColor('PastelBlue', '#B1E2FF')
export const PastelGreen = makeColor('PastelGreen', '#A7FFC4')
export const PastelOrange = makeColor('PastelOrange', '#FFDEB5')
export const PastelRed = makeColor('PastelRed', '#FFAFB9')
export const PastelYellow = makeColor('PastelYellow', '#FFFFB1')
export const Pink = makeColor('Pink', '#FF488E')
export const Red = makeColor('Red', '#FF5C5C')
export const White = makeColor('White', '#FFFFFF')

export interface Props {
  defaultColor?: string
}

export default class BackgroundColor extends React.Component<Props> {
  render() {
    return (
      <Selector option={BackgroundColorOption} defaultOption={this.props.defaultColor || Blue02}>
        <Black />
        <Blue01 />
        <Blue02 />
        <Blue03 />
        <Gray01 />
        <Gray02 />
        <Heather />
        <PastelBlue />
        <PastelGreen />
        <PastelOrange />
        <PastelRed />
        <PastelYellow />
        <Pink />
        <Red />
        <White />
      </Selector>
    )
  }
}
