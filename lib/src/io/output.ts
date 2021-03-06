import { appendFileSync, unlinkSync, existsSync } from 'fs'

export class Output {
    private outputFile: string

    public constructor(filePath) {
        if (existsSync(filePath)) {
            unlinkSync(filePath)
        }
        this.outputFile = filePath
    }

    public print = (text: string) => {
        appendFileSync(this.outputFile, `${text}\n\n`)
    }

    public getOutput = () => this.outputFile
}
