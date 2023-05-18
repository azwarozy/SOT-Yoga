import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const YogaInfoPage = () => {
    return (



        <Container>
            <Row>
                    <div class="heading">
                        <h1>WHAT IS YOGA</h1>
                    </div>
                    <p>
                        Yoga is an ancient practice that involves physical poses, concentration, and deep breathing. A regular yoga practice can promote endurance, strength, calmness, flexibility, and well-being. Yoga is now a popular form of exercise around the world. According to a 2017 national survey, one in seven adults in the United States practiced yoga in the past 12 months.
                    </p>
            </Row>
            <Row>
                <Col>



                    <div class="row">
                        <div class="col-sm">
                            <div class="container">
                                <div className="heading">
                                    <h4>HATHA YOGA</h4>
                                </div>
                                <p>
                                    Hatha yoga is the foundation for all yoga styles and refers to any practice that combines asana, pranayama, and meditation. Typically, these classes have a slightly slower pace, but you can always ask the instructor how vigorous the flow is before jumping in. Since this type of yoga is the foundation for all yoga and tends to be a relaxing flow, hatha can be great for beginners or those wanting a more meditative or even restorative practice.
                                </p>
                            </div></div>

                        <div class="col-sm">
                            <div class="container">
                                <div className="heading">
                                    <h4>VINYASA YOGA</h4>
                                </div>
                                <p>
                                    “Vinyasa” has become shorthand for a number of things. Some teachers use it to refer to the sequence of poses:
                                    Plank Pose
                                    Chaturanga Dandasana
                                    Upward-Facing Dog
                                    Downward-Facing Dog
                                </p>
                            </div></div>

                        <div class="col-sm">
                            <div class="container">
                                <div class="heading">
                                    <h4>ASHTANGA YOGA</h4>
                                </div>
                                <p>
                                    Ashtanga yoga was introduced to the world by Sri K. Pattabhi Jois. There are three different “series” taught in Ashtanga. These are the primary series, intermediate series, and advanced series, though the advanced series is sometimes broken down even further in current practice.
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>

                    <div class="container text-center">
                        <div class="row">
                            <div class="col-sm">
                                <div class="container">
                                    <div class="heading">
                                        <h4>KUNDALINI YOGA</h4>
                                    </div>
                                    <p>
                                        Kundalini is all about awakening your kundalini energy, or shakti, which is the primal energy thought to sit at the base of the spine. This is a more spiritual practice, and there will be more chanting, meditation, and breathing in this class than in others. This can be a little out there for the practitioner who doesn’t fully embrace the philosophy of shakti and all that comes with it. However, it can be fun for the person who wants to chant, learn mantras, and find out more about lesser-known hatha practices, like mula bandha (“root lock”).
                                    </p>
                                </div>
                            </div>


                            <div class="col-sm">
                                <div class="container">
                                    <div class="heading">
                                        <h4>HOT YOGA</h4>
                                    </div>
                                    <p>
                                        As touched on above, not all hot yoga is Bikram yoga. Hot yoga can essentially be any type of yoga done in a heated room, typically between 95 and 100 degrees. In general, hot yoga classes are vinyasa classes held in heated rooms. These classes will, of course, cause practitioners to sweat a lot and can require breaks the first few classes, just like Bikram.
                                    </p>
                                </div>
                            </div>


                            <div class="col-sm">
                                <div class="container">
                                    <div class="heading">
                                        <h4>BIKRAM YOGA</h4>
                                    </div>
                                    <p>
                                        Bikram yoga was created by Bikram Choudhury. It’s a specific and unchanging sequence of 26 poses that are done in a room heated to 105 degrees. In your first few Bikram classes, no matter how fit you are, you’ll probably have to take a break. The heat is thought to help practitioners sweat out toxins in their bodies, and it will absolutely make you sweat. A lot. It may also potentially making you lightheaded your first few times. Expect to wear little clothing, drink a lot of water, and have some patience for yourself when you have to rest.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </Col>
            </Row>

        </Container >
    );
};

export default YogaInfoPage;
