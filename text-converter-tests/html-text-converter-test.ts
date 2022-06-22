import { expect } from 'chai'
import 'mocha'
import HtmlTextConverter from '../text-converter/html-text-converter'
import TextReader from '../text-converter/text-reader'
import { convertedText } from './convertedHtml'

// - [x] read correct file name
// - [x] convert from text to html correctly

describe('Html Text Converter', () => {
    it('TextReader gets correct file name', () => {
        const path = "E:/01.Infnet/09.Engenharia_Disciplinada_Softwares/04.Refatoracao/at/racing-car-kata/text-converter-tests/simpleText.txt"
        const textReader = new TextReader(path)

        expect(textReader.getFilename()).to.equal(path)
    })

    it('TextReader gives correct text', () => {
        const path = "E:/01.Infnet/09.Engenharia_Disciplinada_Softwares/04.Refatoracao/at/racing-car-kata/text-converter-tests/simpleText.txt"
        const string = "Infnet\nEngenharia de Software\nRefatoracao\nProfessor: Rafael\nAluno: Bruno Feijo"
        const textReader = new TextReader(path)

        expect(textReader.getText()).to.equal(string)
    })

    it('Return text converted correctly', () => {
        const path = "E:/01.Infnet/09.Engenharia_Disciplinada_Softwares/04.Refatoracao/at/racing-car-kata/text-converter-tests/simpleText.txt"

        const textReader = new TextReader(path)
        const converter = new HtmlTextConverter()
        const convertedHtml = converter.convertToHtml(textReader.getText())

        expect(convertedHtml).to.equal(convertedText)
    })
})
