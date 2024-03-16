"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/nav/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <div className="w-20 flex items-center space-x-4 h-10"></div>
      <div className="absolute">
        <a href="/" target="_blank" rel="noreferrer">
          <Icons.logo className="hidden md:flex md:object-cover absolute" />
        </a>
      </div>
      <nav className="flex items-center text-sm">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-muted-foreground">
                Upcoming Events
              </NavigationMenuTrigger>
              <NavigationMenuContent className="space-y-2 ">
                <ul className=" list-none grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink href="/Events024/sports-cup">
                      <Button variant="ghost" className="w-full justify-start">
                        <svg
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.0135 4.79963C11.1857 4.57481 11.4983 4.25 12 4.25C12.5017 4.25 12.8143 4.57481 12.9865 4.79963C13.1508 5.01421 13.3163 5.31124 13.486 5.61577L13.6075 5.83369C13.6303 5.87459 13.6482 5.90677 13.6639 5.9343C13.6912 5.94071 13.723 5.94792 13.7627 5.9569L14.0006 6.0107C14.3284 6.08478 14.6542 6.15839 14.9042 6.25695C15.1804 6.36577 15.5547 6.5777 15.6989 7.04161C15.8407 7.49734 15.6618 7.88336 15.5056 8.13146C15.3611 8.36108 15.1414 8.61786 14.9165 8.88075L14.7558 9.06861C14.7213 9.10894 14.6953 9.13935 14.6735 9.16566C14.6764 9.202 14.6805 9.24433 14.686 9.30093L14.7102 9.55039C14.7444 9.90232 14.7774 10.2424 14.7653 10.5145C14.7526 10.7997 14.6841 11.2315 14.2969 11.5254C13.8975 11.8286 13.4564 11.7626 13.1767 11.6824C12.919 11.6086 12.6144 11.4682 12.3077 11.3269L12.0849 11.2243C12.0514 11.2089 12.024 11.1963 12 11.1854C11.976 11.1963 11.9486 11.2089 11.9151 11.2243L11.6923 11.3269C11.3856 11.4682 11.081 11.6086 10.8233 11.6824C10.5436 11.7626 10.1025 11.8286 9.70306 11.5254C9.31589 11.2315 9.24743 10.7997 9.23473 10.5145C9.22261 10.2424 9.25563 9.90234 9.28981 9.55042L9.31399 9.30093C9.31948 9.24433 9.32356 9.202 9.32655 9.16566C9.30465 9.13935 9.27866 9.10894 9.24418 9.06861L9.08351 8.88075C8.8586 8.61786 8.63891 8.36108 8.49436 8.13146C8.33817 7.88336 8.15934 7.49734 8.30106 7.04161C8.44532 6.5777 8.81962 6.36577 9.09576 6.25695C9.34585 6.1584 9.67163 6.08478 9.99944 6.0107L10.2373 5.95691C10.277 5.94792 10.3088 5.94071 10.3361 5.9343C10.3518 5.90677 10.3697 5.87459 10.3925 5.83369L10.514 5.61576C10.6837 5.31124 10.8492 5.01421 11.0135 4.79963ZM12 6.03448C11.9419 6.13513 11.8772 6.25103 11.801 6.38769L11.7027 6.56405L11.6804 6.60466C11.6019 6.74827 11.4718 6.9861 11.255 7.15071C11.0336 7.31876 10.7673 7.37659 10.6116 7.4104L10.5683 7.41992L10.3774 7.46312C10.2022 7.50275 10.0595 7.53509 9.9375 7.56575C10.0169 7.66345 10.1199 7.78474 10.254 7.94154L10.3842 8.09372L10.4141 8.12841C10.5221 8.25273 10.6963 8.45346 10.7769 8.71261C10.8566 8.96869 10.8291 9.23243 10.8118 9.39882L10.807 9.4456L10.7873 9.64866C10.7691 9.83692 10.7549 9.98718 10.7455 10.1094C10.8497 10.0635 10.9682 10.0089 11.109 9.94409L11.2878 9.8618L11.3281 9.8429C11.4716 9.77522 11.7213 9.65746 12 9.65746C12.2787 9.65746 12.5284 9.77521 12.6719 9.84289L12.7122 9.8618L12.891 9.9441C13.0318 10.0089 13.1503 10.0635 13.2545 10.1094C13.2451 9.98718 13.2309 9.83692 13.2127 9.64866L13.193 9.4456L13.1882 9.39882C13.1709 9.23243 13.1434 8.96869 13.2231 8.71261C13.3037 8.45346 13.4779 8.25273 13.5859 8.12841L13.6158 8.09372L13.746 7.94153C13.8801 7.78474 13.9831 7.66345 14.0625 7.56575C13.9405 7.53509 13.7978 7.50275 13.6226 7.46312L13.4317 7.41992L13.3884 7.4104C13.2327 7.37659 12.9664 7.31877 12.745 7.15071C12.5282 6.9861 12.3981 6.74827 12.3196 6.60466L12.2973 6.56405L12.199 6.38769C12.1228 6.25103 12.0581 6.13513 12 6.03448ZM10.7393 10.5115C10.7393 10.5116 10.7391 10.5106 10.7387 10.5084L10.7393 10.5115ZM13.2607 10.5115L13.2613 10.5084C13.2609 10.5106 13.2607 10.5116 13.2607 10.5115Z"
                              fill="#1C274C"
                            ></path>{" "}
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.4984 1.60719C8.66129 1.41099 10.1724 1.25 12.0002 1.25C13.8279 1.25 15.339 1.41099 16.5019 1.60719L16.6368 1.62983C17.647 1.79893 18.4866 1.93949 19.1432 2.74808C19.5643 3.26668 19.7001 3.82713 19.7314 4.45322L20.2231 4.61712C20.6862 4.77147 21.0921 4.90675 21.4142 5.05656C21.7623 5.21852 22.0814 5.42714 22.3253 5.76555C22.5692 6.10396 22.6662 6.47262 22.7098 6.85411C22.75 7.20701 22.75 7.63488 22.75 8.12306L22.75 8.26828C22.75 8.67007 22.75 9.02499 22.7203 9.32179C22.6882 9.64348 22.617 9.95621 22.4391 10.2584C22.2613 10.5607 22.0225 10.7748 21.7569 10.9591C21.5118 11.1292 21.2016 11.3015 20.8503 11.4966L18.2097 12.9637C17.6703 14.025 16.9292 14.9713 15.9101 15.6548C15.0354 16.2414 13.9881 16.6128 12.75 16.7187V18.75H14.1802C15.0144 18.75 15.7326 19.3388 15.8962 20.1568L16.1149 21.25H18C18.4142 21.25 18.75 21.5858 18.75 22C18.75 22.4142 18.4142 22.75 18 22.75H6C5.58579 22.75 5.25 22.4142 5.25 22C5.25 21.5858 5.58579 21.25 6 21.25H7.88515L8.10379 20.1568C8.26739 19.3388 8.98562 18.75 9.81981 18.75H11.25V16.7187C10.012 16.6127 8.9648 16.2414 8.09017 15.6548C7.07115 14.9713 6.33018 14.0252 5.79078 12.964L3.14962 11.4966C2.79836 11.3015 2.48813 11.1292 2.24307 10.9591C1.97748 10.7748 1.73867 10.5607 1.56083 10.2584C1.38299 9.95621 1.3118 9.64348 1.27965 9.32179C1.24999 9.02497 1.25 8.67008 1.25001 8.26827L1.25 8.12304C1.24996 7.63488 1.24992 7.20701 1.2902 6.85411C1.33375 6.47262 1.43076 6.10396 1.67466 5.76555C1.91857 5.42714 2.23762 5.21852 2.58577 5.05656C2.90781 4.90675 3.31373 4.77147 3.77686 4.61712L4.26891 4.4531C4.30023 3.82706 4.43608 3.26664 4.85712 2.74808C5.51366 1.93949 6.35333 1.79893 7.36355 1.62983L7.4984 1.60719ZM9.41486 21.25H14.5852L14.4253 20.451C14.402 20.3341 14.2994 20.25 14.1802 20.25H9.81981C9.70064 20.25 9.59804 20.3341 9.57467 20.451L9.41486 21.25ZM4.3021 6.02318L4.28849 6.02772C3.77708 6.19819 3.45362 6.3072 3.21847 6.4166C3.0008 6.51786 2.93077 6.58817 2.89154 6.6426C2.85231 6.69703 2.80775 6.7857 2.78053 7.02422C2.75111 7.28191 2.74999 7.62323 2.75001 8.16231L2.75001 8.23484C2.75002 8.68002 2.75089 8.95925 2.77221 9.17263C2.79187 9.36934 2.82428 9.44786 2.85363 9.49774C2.88298 9.54762 2.93588 9.61407 3.09829 9.72679C3.27447 9.84906 3.51814 9.98542 3.90729 10.2016L4.97298 10.7937C4.5454 9.22376 4.37367 7.54348 4.3021 6.02318ZM19.0274 10.7935C19.4549 9.22364 19.6266 7.54349 19.6982 6.0233L19.7115 6.02772C20.2229 6.19819 20.5463 6.3072 20.7815 6.4166C20.9992 6.51786 21.0692 6.58817 21.1084 6.6426C21.1477 6.69703 21.1922 6.7857 21.2194 7.02422C21.2488 7.28191 21.25 7.62323 21.25 8.16231L21.25 8.23484C21.2499 8.68002 21.2491 8.95925 21.2277 9.17263C21.2081 9.36934 21.1757 9.44786 21.1463 9.49774C21.117 9.54762 21.0641 9.61407 20.9017 9.72679C20.7255 9.84906 20.4818 9.98542 20.0927 10.2016L19.0274 10.7935ZM12.0002 2.75C10.2608 2.75 8.83319 2.90319 7.74796 3.08629C6.54104 3.28992 6.28751 3.3661 6.02161 3.69358C5.75956 4.01632 5.73468 4.32156 5.78848 5.67672C5.87815 7.93537 6.1761 10.3727 7.09884 12.2264C7.55432 13.1414 8.14983 13.8887 8.92569 14.409C9.69656 14.9261 10.6911 15.25 12.0002 15.25C13.3092 15.25 14.3037 14.9261 15.0746 14.409C15.8505 13.8887 16.446 13.1414 16.9015 12.2264C17.8242 10.3727 18.1222 7.93537 18.2118 5.67672C18.2656 4.32156 18.2407 4.01632 17.9787 3.69358C17.7128 3.3661 17.4593 3.28992 16.2524 3.08629C15.1671 2.90319 13.7395 2.75 12.0002 2.75Z"
                              fill="currentcolor"
                            ></path>{" "}
                          </g>
                        </svg>
                        Sports Cup
                      </Button>
                    </NavigationMenuLink>
                  </li>

                  <li className="row-span-3">
                    <NavigationMenuLink href="/Events024/python-workshop">
                      <Button variant="ghost" className="w-full justify-start">
                        <svg
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M6 2.5H7M4.5 4V1.5C4.5 0.947715 4.94772 0.5 5.5 0.5H9.5C10.0523 0.5 10.5 0.947715 10.5 1.5V6.5C10.5 7.05228 10.0523 7.5 9.5 7.5H5.5C4.94772 7.5 4.5 7.94772 4.5 8.5V13.5C4.5 14.0523 4.94772 14.5 5.5 14.5H9.5C10.0523 14.5 10.5 14.0523 10.5 13.5V11M8 4.5H1.5C0.947715 4.5 0.5 4.94772 0.5 5.5V10.5C0.5 11.0523 0.947715 11.5 1.5 11.5H4.5M7 10.5H13.5C14.0523 10.5 14.5 10.0523 14.5 9.5V4.5C14.5 3.94772 14.0523 3.5 13.5 3.5H10.5M8 12.5H9"
                              stroke="currentcolor"
                            ></path>{" "}
                          </g>
                        </svg>
                        Python Workshop
                      </Button>
                    </NavigationMenuLink>
                  </li>

                  <li className="row-span-3">
                    <NavigationMenuLink href="/Events024/career-alumni-meet">
                      <Button variant="ghost" className="w-full justify-start">
                        <svg
                          className="w-5 h-5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M23 18h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-15.999-10c-2.493 0-4.227 2.383-1.866 6.839.774 1.464-.826 1.812-2.545 2.209-1.491.345-1.59 1.072-1.59 2.334l.002.618h1.329c0-1.918-.186-1.385 1.824-1.973 1.014-.295 1.91-.723 2.316-1.612.212-.463.355-1.22-.162-2.197-.952-1.798-1.219-3.374-.712-4.215.547-.909 2.27-.908 2.819.015.935 1.567-.793 3.982-1.02 4.982h1.396c.44-1 1.206-2.208 1.206-3.9.001-2.01-1.31-3.1-2.997-3.1zm7.754-1.556c.895-1.487 3.609-1.494 4.512.022.77 1.291.423 3.484-.949 6.017-.098.18-.17.351-.232.517h1.464c3.057-5.744.816-9-2.548-9-3.323 0-5.635 3.177-2.488 9.119 1.033 1.952-1.101 2.416-3.394 2.946-1.988.458-2.12 1.429-2.12 3.11l.003.825h1.331c0-2.069-.08-2.367 1.173-2.657 1.918-.442 3.729-.86 4.39-2.305.241-.527.401-1.397-.206-2.543-1.362-2.572-1.704-4.777-.936-6.051z" />
                        </svg>
                        Career Alumni Meet
                      </Button>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-muted-foreground">
                Topic and Trends
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  <li>
                    <NavigationMenuLink>
                      <Button variant="ghost" className="w-full justify-start">
                        <svg
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M6 2.5H7M4.5 4V1.5C4.5 0.947715 4.94772 0.5 5.5 0.5H9.5C10.0523 0.5 10.5 0.947715 10.5 1.5V6.5C10.5 7.05228 10.0523 7.5 9.5 7.5H5.5C4.94772 7.5 4.5 7.94772 4.5 8.5V13.5C4.5 14.0523 4.94772 14.5 5.5 14.5H9.5C10.0523 14.5 10.5 14.0523 10.5 13.5V11M8 4.5H1.5C0.947715 4.5 0.5 4.94772 0.5 5.5V10.5C0.5 11.0523 0.947715 11.5 1.5 11.5H4.5M7 10.5H13.5C14.0523 10.5 14.5 10.0523 14.5 9.5V4.5C14.5 3.94772 14.0523 3.5 13.5 3.5H10.5M8 12.5H9"
                              stroke="currentcolor"
                            ></path>{" "}
                          </g>
                        </svg>
                        Python Workshop
                      </Button>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <Button variant="ghost" className="w-full justify-start">
                        <svg
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M6 2.5H7M4.5 4V1.5C4.5 0.947715 4.94772 0.5 5.5 0.5H9.5C10.0523 0.5 10.5 0.947715 10.5 1.5V6.5C10.5 7.05228 10.0523 7.5 9.5 7.5H5.5C4.94772 7.5 4.5 7.94772 4.5 8.5V13.5C4.5 14.0523 4.94772 14.5 5.5 14.5H9.5C10.0523 14.5 10.5 14.0523 10.5 13.5V11M8 4.5H1.5C0.947715 4.5 0.5 4.94772 0.5 5.5V10.5C0.5 11.0523 0.947715 11.5 1.5 11.5H4.5M7 10.5H13.5C14.0523 10.5 14.5 10.0523 14.5 9.5V4.5C14.5 3.94772 14.0523 3.5 13.5 3.5H10.5M8 12.5H9"
                              stroke="currentcolor"
                            ></path>{" "}
                          </g>
                        </svg>
                        Python Workshop
                      </Button>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <Button variant="ghost" className="w-full justify-start">
                        <svg
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M6 2.5H7M4.5 4V1.5C4.5 0.947715 4.94772 0.5 5.5 0.5H9.5C10.0523 0.5 10.5 0.947715 10.5 1.5V6.5C10.5 7.05228 10.0523 7.5 9.5 7.5H5.5C4.94772 7.5 4.5 7.94772 4.5 8.5V13.5C4.5 14.0523 4.94772 14.5 5.5 14.5H9.5C10.0523 14.5 10.5 14.0523 10.5 13.5V11M8 4.5H1.5C0.947715 4.5 0.5 4.94772 0.5 5.5V10.5C0.5 11.0523 0.947715 11.5 1.5 11.5H4.5M7 10.5H13.5C14.0523 10.5 14.5 10.0523 14.5 9.5V4.5C14.5 3.94772 14.0523 3.5 13.5 3.5H10.5M8 12.5H9"
                              stroke="currentcolor"
                            ></path>{" "}
                          </g>
                        </svg>
                        Python Workshop
                      </Button>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-muted-foreground">
                Events
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  <li>
                    <NavigationMenuLink>
                      <Button variant="ghost" className="w-full justify-start">
                        <svg
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M6 2.5H7M4.5 4V1.5C4.5 0.947715 4.94772 0.5 5.5 0.5H9.5C10.0523 0.5 10.5 0.947715 10.5 1.5V6.5C10.5 7.05228 10.0523 7.5 9.5 7.5H5.5C4.94772 7.5 4.5 7.94772 4.5 8.5V13.5C4.5 14.0523 4.94772 14.5 5.5 14.5H9.5C10.0523 14.5 10.5 14.0523 10.5 13.5V11M8 4.5H1.5C0.947715 4.5 0.5 4.94772 0.5 5.5V10.5C0.5 11.0523 0.947715 11.5 1.5 11.5H4.5M7 10.5H13.5C14.0523 10.5 14.5 10.0523 14.5 9.5V4.5C14.5 3.94772 14.0523 3.5 13.5 3.5H10.5M8 12.5H9"
                              stroke="currentcolor"
                            ></path>{" "}
                          </g>
                        </svg>
                        Python Workshop
                      </Button>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <Button variant="ghost" className="w-full justify-start">
                        <svg
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M6 2.5H7M4.5 4V1.5C4.5 0.947715 4.94772 0.5 5.5 0.5H9.5C10.0523 0.5 10.5 0.947715 10.5 1.5V6.5C10.5 7.05228 10.0523 7.5 9.5 7.5H5.5C4.94772 7.5 4.5 7.94772 4.5 8.5V13.5C4.5 14.0523 4.94772 14.5 5.5 14.5H9.5C10.0523 14.5 10.5 14.0523 10.5 13.5V11M8 4.5H1.5C0.947715 4.5 0.5 4.94772 0.5 5.5V10.5C0.5 11.0523 0.947715 11.5 1.5 11.5H4.5M7 10.5H13.5C14.0523 10.5 14.5 10.0523 14.5 9.5V4.5C14.5 3.94772 14.0523 3.5 13.5 3.5H10.5M8 12.5H9"
                              stroke="currentcolor"
                            ></path>{" "}
                          </g>
                        </svg>
                        Python Workshop
                      </Button>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <Button variant="ghost" className="w-full justify-start">
                        <svg
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M6 2.5H7M4.5 4V1.5C4.5 0.947715 4.94772 0.5 5.5 0.5H9.5C10.0523 0.5 10.5 0.947715 10.5 1.5V6.5C10.5 7.05228 10.0523 7.5 9.5 7.5H5.5C4.94772 7.5 4.5 7.94772 4.5 8.5V13.5C4.5 14.0523 4.94772 14.5 5.5 14.5H9.5C10.0523 14.5 10.5 14.0523 10.5 13.5V11M8 4.5H1.5C0.947715 4.5 0.5 4.94772 0.5 5.5V10.5C0.5 11.0523 0.947715 11.5 1.5 11.5H4.5M7 10.5H13.5C14.0523 10.5 14.5 10.0523 14.5 9.5V4.5C14.5 3.94772 14.0523 3.5 13.5 3.5H10.5M8 12.5H9"
                              stroke="currentcolor"
                            ></path>{" "}
                          </g>
                        </svg>
                        Python Workshop
                      </Button>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/discover"
                className={navigationMenuTriggerStyle()}
              >
                <div className="text-muted-foreground">Discover</div>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  );
}
