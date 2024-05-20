import AppWrapper from "../containers/AppWrapper";

import "../styles/MainPage.css";
import Background from "../styles/images/a.jpg";

const MainPage = () => {
  return (
    <AppWrapper>
      <div class="main-page">
        <div class="middle">
          <div style={{ backgroundImage: `url(${Background})` }}>
            <p>
              <br />
              <br />
              Health Care Services <br />
              <font size="5px"> We Care About Your Health </font>
            </p>
          </div>
        </div>

        <div class="bottom">
          <div>
            <table border="0">
              <tr>
                <td width="700px">
                  <font color="#000"> We are medical center </font> <br />
                  <br />
                  <font color="#000" size="5px">
                    We Have Medicare Plan Options for You!
                  </font>
                  <br />
                  <br />
                  Phasellus pretium orci sit amet mi ullamcorper egestas. Sed
                  non mattis metus. Integer vel lorem tincidunt, pharetra eros
                  nec, posuere odio. Nullam eget bibendum sem, venenatis lacinia
                  justo. Duis aliquet lobortis neque, eget volutpat nulla
                  iaculis a.
                  <br />
                  <br />
                  In hac habitasse platea dictumst. Praesent condimentum justo
                  justo, at ultricies diam accumsan vitae. Donec ac elementum
                  diam. Ut quam orci, posuere quis lacus sed, vehicula rhoncus
                  massa. Nunc volutpat nibh nulla, tincidunt egestas tellus
                  faucibus nec.
                  <br />
                  <br />
                  <ul>
                    <li>
                      Nulla venenatis auctor quam, ac porta lectus dictum in
                    </li>
                    <li>Aliquam sodales nisi sit amet lorem</li>
                    <li>
                      Suspendisse vulputate tellus in justo convallis imperdiet
                    </li>
                    <li>Morbi id lorem consequat, sodales mi non</li>
                    <li>
                      Nulla venenatis auctor quam, ac porta lectus dictum in
                    </li>
                  </ul>
                  <br />
                </td>

                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </AppWrapper>
  );
};

export default MainPage;
