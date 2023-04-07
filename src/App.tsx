// @ts-nocheck
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="flex flex-col items-start text-left">
      <div className="flex flex-wrap items-center gap-4 justify-between w-full">
        <h1 className="text-4xl">Examples of uses of UnoCSS</h1>
        <img width="100" heigth="auto" src={logo} alt="log unoCSS" />
      </div>
      <hr className="mb-30px" />
      {/* Section 1 - Basic preset */}
      <section>
        <h2 className="text-3xl text-blue-500 py-4 max-w-[600px]">
          1. Basic preset: Use of Tailwind, Bootstrap or Windy utility class
          names
        </h2>
        <h3 className="pb-4">Spacing</h3>
        <div>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="pb-4">Spacing with Bootstrap (or Tailwind)</div>{" "}
            <code className="pb-4">
              {" "}
              &lt;div className=&quot;pb-4&quot;&gt;Spacing with
              Bootstrap&lt;/div&gt;
            </code>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="pb-16px">Spacing with Windy</div>{" "}
            <code className="pb-16px">
              {" "}
              &lt;div className=&quot;pb-16px&quot;&gt;Spacing with
              Windy&lt;/div&gt;
            </code>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="pb-[16px]">Spacing with Tailwind</div>{" "}
            <code className="pb-[16px]">
              {" "}
              &lt;div className=&quot;pb-[16px]&quot;&gt;Spacing with
              Tailwind&lt;/div&gt;
            </code>
          </div>
        </div>

        <h3 className="pb-4">Font Size</h3>
        <div>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="text-[14px]">Font Size with Tailwind</div>
            <code className="text-[14px]">
              {" "}
              &lt;div className=&quot;text-[14px]&quot;&gt;Font Size with
              Tailwind&lt;/div&gt;
            </code>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="text-14px">Font Size with Windy</div>
            <code className="text-14px">
              {" "}
              &lt;div className=&quot;text-14px&quot;&gt;Font Size with
              Windy&lt;/div&gt;
            </code>
          </div>
        </div>
      </section>
      {/* Section 2 - Icons preset */}
      <section>
        <h2 className="text-3xl text-blue-500 py-4">
          2. Use of other presets: icons
        </h2>
        <div className="i-ei-pointer h-35px w-35px"></div>
        <div className="i-ei-archive h-35px w-35px"></div>
        <div className="i-ei-chart h-35px w-35px"></div>
      </section>
      {/* Section 3 - Attribufy preset */}
      <section>
        {/* <h2 className="text-3xl text-blue-500 py-4 "> */}
        <h2 text="3xl red-500" className="py-4 ">
          3. Use of other presets: attribufy
        </h2>
        <div flex justify-between>
          Example with text attribufy:
          <div flex flex-col text-blue-600>
            <p>Top</p>
            <p>Bottom</p>
          </div>
        </div>
      </section>
      {/* Section 4 - Tagify preset */}
      <section>
        <h2 className="text-3xl text-blue-500 py-4">
          4. Use of other presets: tagify (classes as tags!)
        </h2>

        <manu>Hola</manu>

        <flex justify-between>
          <text-orange>Hola</text-orange>
          <flex flex-col>
            <text-blue>Adios</text-blue>
            <text-green>Adios</text-green>
          </flex>
        </flex>
      </section>
    </div>
  );
}

export default App;
