import React from 'react';
import navbar from "./Nav";
import './App.css';

function App() {
    return (
        <div className="App">
            {navbar()}
            <div className="container-fluid pt-3">
                <h1>Vaccination Records</h1>
                <Tabs/>
                <div className="tab-content" id="myTabContent">
                    <TabContent id="home" className="show active"/>
                    <TabContent id="profile"/>
                    <TabContent id="contact"/>
                </div>
            </div>
        </div>
    );
}

function Tabs(props) {
    return (
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                   aria-controls="home"
                   aria-selected="true">Rover</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                   aria-controls="profile"
                   aria-selected="false">Polly</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                   aria-controls="contact"
                   aria-selected="false">Zoomer</a>
            </li>
        </ul>
    )
}

function TabContent(props) {
    return (
        <div className={`tab-pane fade ${props.className} pt-2`} id={props.id} role="tabpanel"
             aria-labelledby={`${props.id}-tab`}>
            <h5>Schedule</h5>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Vaccine</th>
                    <th scope="col">Last Given</th>
                    <th scope="col">Next Needed</th>
                    <th scope="col">Booster Recommendation</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">Distemper</th>
                    <td>10/2019</td>
                    <td>11/2019</td>
                    <td>Core dog vaccine. Caused by an airborne virus, distemper is a severe disease that, among other
                        problems, may cause permanent brain damage.
                    </td>
                </tr>
                <tr>
                    <th scope="row">Rabies</th>
                    <td>10/2019</td>
                    <td>10/2021</td>
                    <td>A second vaccination is recommended after 1 year, then boosters every 3 years.</td>
                </tr>
                <tr>
                    <th scope="row">Parvovirus</th>
                    <td>10/2019</td>
                    <td>10/2021</td>
                    <td>A second vaccination is recommended after 1 year, then boosters every 3 years.</td>
                </tr>
                <tr>
                    <th scope="row">Sample</th>
                    <td>10/2019</td>
                    <td>10/2021</td>
                    <td>A second vaccination is recommended after 1 year, then boosters every 3 years.</td>
                </tr>
                <tr>
                    <th scope="row">Sample</th>
                    <td>10/2019</td>
                    <td>10/2021</td>
                    <td>A second vaccination is recommended after 1 year, then boosters every 3 years.</td>
                </tr>
                </tbody>
            </table>
            <VaccinationModal/>
            <h5 className="pt-2">Notes</h5>
            <div className="notes-container mb-4">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                    release of
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                    like
                    Aldus PageMaker including versions of Lorem Ipsum.</p>

                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical
                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from
                    a Lorem
                    Ipsum passage, and going through the cites of the word in classical literature, discovered the
                    undoubtable
                    source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes
                    of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
                    popular
                    during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a
                    line in
                    section 1.10.32.</p>

                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                    Sections
                    1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
                    exact
                    original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words which don't look even slightly
                    believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                    tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                    It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
                    to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
                    from repetition, injected humour, or non-characteristic words etc.</p>
            </div>
        </div>
    )
}

function VaccinationModal(props) {
    return (
        <div>
            <div type="button" className="btn btn-primary" onClick={() => alert("Not supported at this time")}>
                Add Vaccination
            </div>
        </div>
    )
}


export default App;
