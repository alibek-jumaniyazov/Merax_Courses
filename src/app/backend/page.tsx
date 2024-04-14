"use client";
import React from "react";
import ContactCourse from "@/components/pageCoursers/ContactCourse";
import CourseDate from "@/components/pageCoursers/CourseDate";
import CourseInfo from "@/components/pageCoursers/CourseInfo";
import CourseTeach from "@/components/pageCoursers/CourseTeach";
import WhoCourse from "@/components/pageCoursers/WhoCourse";
import CourseBanner from "@/components/pageCoursers/CourseBanner";
import CourseFits from "@/components/pageCoursers/CourseFits";
import {
  contactInfo,
  courseBanner,
  courseFits,
  courseHeadInfo,
  courseInfo,
  courseTeach,
  courseWho,
} from "@/context/PagesTextInfos/BackendInfo";
import CourseRequired from "@/components/pageCoursers/CourseRequired";
type Props = {};

export default function Page({}: Props) {
  return (
    <div className="2xl:w-[1440px] w-[1240px] my-0 mx-auto ">
      {courseBanner.map((item , index) => (
        <CourseBanner item={item} key={index}/>
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
      <CourseRequired />
      {contactInfo.map((item, index) => (
        <ContactCourse key={index} item={item} />
      ))}
    </div>
  );
}
