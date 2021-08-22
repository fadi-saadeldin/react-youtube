const rewire = require("rewire")
const viedoList = rewire("./viedoList")
const VideoList = viedoList.__get__("VideoList")
// @ponicode
describe("handleVideoSelect", () => {
    let inst

    beforeEach(() => {
        inst = new VideoList()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleVideoSelect("http://placeimg.com/640/480")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleVideoSelect(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
