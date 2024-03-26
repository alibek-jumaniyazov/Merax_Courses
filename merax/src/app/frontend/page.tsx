"use client";
import React, { useState } from "react";
import ContactCourse from "@/components/pageCoursers/ContactCourse";
import CourseDate from "@/components/pageCoursers/CourseDate";
import CourseInfo from "@/components/pageCoursers/CourseInfo";
import CourseTeach from "@/components/pageCoursers/CourseTeach";
import WhoCourse from "@/components/pageCoursers/WhoCourse";
import CourseBanner from "@/components/pageCoursers/CourseBanner";
import CourseFits from "@/components/pageCoursers/CourseFits";
import CourseCertificate from "@/components/pageCoursers/CourseCertificate";
import {
    contactInfo,
    courseBanner,
    courseFits,
    courseHeadInfo,
    courseInfo,
    courseTeach,
    courseWho,
} from "@/context/FrontendInfo";

type Props = {};

export default function Page({}: Props) {
    return (
        <div className="">
            {courseBanner.map((item) => (
                <CourseBanner item={item} />
            ))}
            {courseHeadInfo.map((item, index) => (
                <CourseDate key={index} item={item} />
            ))}
            {courseWho.map((item, index) => (
                <WhoCourse key={index} item={item} />
            ))}
            <CourseInfo courseInfo={courseInfo} />
            <CourseFits courseFits={courseFits} />
            {courseTeach.map((item, index) => (
                <CourseTeach key={index} item={item} />
            ))}
            <CourseCertificate />
            {contactInfo.map((item, index) => (
                <ContactCourse key={index} item={item} />
            ))}
        </div>
    );
}
