/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Nullable from '../../common/Nullable'

import FigureImp, { FigureTemplate, FigureConstructor, FigureInnerConstructor } from '../../component/Figure'

import circle from './circle'
import line from './line'
import polygon from './polygon'
import rect from './rect'
import text from './text'
import rectText from './rectText'
import arc from './arc'

const figures: { [key: string]: FigureInnerConstructor } = {}

const extensions = [circle, line, polygon, rect, text, rectText, arc]
extensions.forEach((figure: FigureTemplate) => {
  figures[figure.name] = FigureImp.extend(figure)
})

function getSupportedFigures (): string[] {
  return Object.keys(figures)
}

function registerFigure<A = any, S = any> (figure: FigureTemplate<A, S>): void {
  figures[figure.name] = FigureImp.extend(figure)
}

function getInnerFigureClass<A = any, S = any> (name: string): Nullable<FigureInnerConstructor<A, S>> {
  return figures[name] ?? null
}

function getFigureClass<A = any, S = any> (name: string): Nullable<FigureConstructor<A, S>> {
  return figures[name] ?? null
}

export { getSupportedFigures, getFigureClass, getInnerFigureClass, registerFigure }
