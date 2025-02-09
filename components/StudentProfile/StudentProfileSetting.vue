<template>
    <div class="student-profile-enroll">
        <ul class="nav mb-30" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="profileA-tab" data-bs-toggle="tab" data-bs-target="#profileA"
                    type="button" role="tab" aria-controls="profileA" aria-selected="true">Profile</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="password-tab" data-bs-toggle="tab" data-bs-target="#password" type="button"
                    role="tab" aria-controls="password" aria-selected="false">Password</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="completedA-tab" data-bs-toggle="tab" data-bs-target="#completedA" type="button"
                    role="tab" aria-controls="completedA" aria-selected="false">Social</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="profileA" role="tabpanel" aria-labelledby="profileA-tab">
                <div class="student-profile-settings">
                    <div class="student-profile-setting-img mb-40">
                        <div class="student-profile-setting-cover-img"
                            :style="{ backgroundImage: `url(/img/slider/course-slider.jpg)` }">
                        </div>
                        <div class="student-profile-setting-author-img">
                            <img src="/img/course/course-student.png" alt="img not found" />
                        </div>
                    </div>
                    <form action="#">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="contact-from-input mb-20">
                                    <label for="FirstName">First Name</label>
                                    <input id='FirstName' type="text" placeholder="First Name" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="contact-from-input mb-20">
                                    <label for="LastName">Last Name</label>
                                    <input id='LastName' type="text" placeholder="Last Name" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="contact-from-input mb-20">
                                    <label for="User">User Name</label>
                                    <input id='User' type="text" placeholder="User Name" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="contact-from-input mb-20">
                                    <label for="Email">Email</label>
                                    <input id='Email' type="email" placeholder="Email" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="contact-from-input mb-20">
                                    <label for="Phone">Phone </label>
                                    <input id='Phone' type="text" placeholder="Phone" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="contact-from-input mb-20">
                                    <label for="Occupation">Occupation </label>
                                    <input id='Occupation' type="text" placeholder="Occupation " />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="contact-from-input mb-20">
                                    <label for="Bio">Biography </label>
                                    <textarea id='Bio' placeholder="Biography"></textarea>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="cont-btn mb-20 mt-10">
                                    <button type='button' class="cont-btn">Update
                                        Profile</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
                <form action="#">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="contact-from-input mb-20">
                                <label for="Current">Current Password</label>
                                <input id='Current' type="password" placeholder="Type password" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="contact-from-input mb-20">
                                <label for="New">New Password</label>
                                <input id='New' type="password" placeholder="Type password" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="contact-from-input mb-20">
                                <label for="Retype">Re-type New Password</label>
                                <input id='Retype' type="password" placeholder="Type password" />
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="cont-btn mb-20 mt-10">
                                <button type='button' class="cont-btn">Update
                                    Profile</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="tab-pane fade" id="completedA" role="tabpanel" aria-labelledby="completedA-tab">
                <div class="student-social-profile-link">
                    <span class='mb-20'>Social Profile Link</span>
                    <form action="#">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="contact-from-input mb-20">
                                    <input type="text" placeholder="Write Your Facebook URL" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="contact-from-input mb-20">
                                    <input type="text" placeholder="Write Your Twitter URL" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="contact-from-input mb-20">
                                    <input type="text" placeholder="Write Your Instagram URL" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="contact-from-input mb-20">
                                    <input type="text" placeholder="Write Your Linkedin URL" />
                                </div>
                            </div>
                            <div class="col-sm-12 ">
                                <div class="cont-btn mb-20 mt-10">
                                    <button type='button' class="cont-btn">Update
                                        Profile</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>