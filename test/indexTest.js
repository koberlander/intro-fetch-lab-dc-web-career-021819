var expect = chai.expect;

describe("swapi.js", () => {
  beforeEach(() => {
    sinon.stub(window, "fetch");
  });

  afterEach(() => {
    window.fetch.restore();
  });

  describe("Opening Crawl", () => {
    let fakeData = { opening_crawl: "test opening crawl" };

    beforeEach(() => {
      window.fetch.callsFake(() =>
        Promise.resolve({ json: () => Promise.resolve(fakeData) })
      );
      let button = document.querySelector("#crawlBtn");
      button.click();
    });

    it('When the user clicks the button "Get Opening Crawl", you should fetch the data from the correct URL', () => {
      expect(window.fetch).to.have.been.calledWith(
        "https://swapi.co/api/films/1/"
      );
    });

    it("When the promise is resolved, the opening crawl should appear on the page", done => {
      setTimeout(() => {
        let div = document.getElementById("crawlDiv");
        expect(div.innerText).equal(fakeData.opening_crawl);
        done();
      }, 0);
    });
  });

  describe("Star Wars Planets", () => {
    let fakeData = {name: "test planet", climate: "test climate"}
    beforeEach(() => {
      window.fetch.callsFake(() =>
        Promise.resolve({json: () => Promise.resolve(fakeData)})
      );
      let input = document.querySelector("#planetInput");
      let form = document.querySelector("#planetForm");
      input.value = "1";
      // form.submit()
    })
    it("On submit of the planet form, fetch that planet's data from the correct url", () => {
      expect(window.fetch).to.have.been.calledWith(
        "https://swapi.co/api/planets/1/"
      );
    });

    it("When the promise resolves, display the name and climate of the planet in the `#planetData`", done => {
      //
      setTimeout(() => {
        let div = document.getElementById("planetData");
        expect(div.innerText).equal(`<p>Name: ${fakeData.name}</p> <p>Climate: ${fakeData.climate}`);
        done();
      }, 0);
    });

    it("Validates that the planet id is a number between 1 and 60", () => {
      // multiple expects here
      expect(myFunction(42)).to.be.false;
    });
  });

  describe("These Are The Droids", () => {
    it("When the page loads, fetch the data for the characters", () => {
      expect(myFunction(9001)).to.be.true;
    });

    it("When the promise resolves, display each droid's name, height, and mass on the screen in the appropriate divs", () => {
      expect(myFunction(42)).to.be.false;
    });

    it("When the promise resolves, each droid div should have a button to 'Show Homeworld Details'", () => {
      expect(myFunction(42)).to.be.false;
    });

    it('When the user clicks the button "Show Homeworld Details" for either droid, you should fetch the homeworld planet data from the correct URL', () => {
      expect(myVariable).to.eq(42);
    });

    it("When the promise resolves, each droid's div should display the homeworld name in a span", () => {
      expect(myFunction(42)).to.be.false;
    });
  });
});

describe("numbers.js", () => {
  beforeEach(() => {
    sinon.stub(window, "fetch")
  })

  afterEach(() => {
    window.fetch.restore();
  })

  describe("Number One", () => {
    let fakeData = "Fake test fact"
    beforeEach(() => {
      window.fetch.callsFake(() =>
        Promise.resolve({text: () => Promise.resolve(fakeData)})
      );
      let button = document.querySelector("#number-one");
      button.click();
    })
    it("When a user clicks on the button 'Facts About 1', fetch a random fact about the number 1", () => {
      expect(window.fetch).to.have.been.calledWith(`http://numbersapi.com/1/trivia`)
    });
    it("When the promise is resolved, a random fact about the number 1 should be displayed in the `#one-facts` div", done => {
      setTimeout(() => {
        let div = document.getElementById("one-facts");
        expect(div.innerText).equal(fakeData);
        done();
      }, 0);
    });
  });

  describe("Pick a Number", () => {
    it("On change of the number input, fetch a math fact about that number", () => {
      expect(myFunction(9001)).to.be.true;
    });
    it("When the promise is resolved, show the math fact on the screen in the `#random-math-fact` div", () => {
      expect(myFunction(42)).to.be.false;
    });
    it("Validates that the input is a number", () => {
      expect(myFunction(42)).to.be.false;
    });
  });
  // we aren't quite sure how to do this?
  describe("Those who fail to study history", () => {
    it("When the page loads, fetch a fact about this year", () => {
      expect(myFunction(9001)).to.be.true;
    });
    it("When the promise is resolved, the fact should be displayed in the `#year-history` div", () => {
      expect(myFunction(9001)).to.be.true;
    });
    // how do we test setInterval callback functions?
    it("Every five seconds, the previous year`s fact should be fetched", () => {
      expect(myFunction(9001)).to.be.true;
    });
  });

  describe("All the Numbers", () => {
    it("When a user clicks the button, fetch facts for one hundred random numbers", () => {
      expect(myFunction(9001)).to.be.true;
    });
    it("When the promise is resolved, all facts should be displayed in the `#all-the-numbers` div", () => {
      expect(myFunction(9001)).to.be.true;
    });
  });
});
