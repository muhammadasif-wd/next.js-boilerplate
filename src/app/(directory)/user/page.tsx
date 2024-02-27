"use client";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React, {Suspense, useState} from "react";
import {useTheme} from "next-themes";
import {Icon} from "@iconify/react";
import dynamic from "next/dynamic";

import {chartData} from "@/assets/db/chart";
import Loading from "@/app/loading";
import {dashboardInfo} from "@/assets/db/dashboard";
import ReusableSkeleton from "@/components/skeleton";

const SimpleBarChart = dynamic(() => import("@/components/bar-chart"), {
  ssr: false,
  loading: () => <ReusableSkeleton childStyle="w-full h-80" />,
});
const SimpleAreaChart = dynamic(() => import("@/components/area-chart"), {
  ssr: false,
  loading: () => <ReusableSkeleton childStyle="w-full h-80" />,
});

const UserDashboard = () => {
  const {theme} = useTheme();

  const [selectedKeys, setSelectedKeys] = useState(new Set([6]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  const months = Array?.from({length: 12}, (_, i) => ({
    key: `${i + 1}`,
    value: `${i + 1} Month`,
  }));

  return (
    <div>
      <header>
        <h1 className="text-2xl font-bold text-dark dark:text-light">Welcome!</h1>
        <p className="font-medium text-dark/70 dark:text-light/70">
          Here is visitor management system dashboard{" "}
        </p>
      </header>
      <section className="mt-5 grid xl:grid-cols-2 grid-cols-1 gap-3">
        <Card className="md:p-5 p-1">
          <CardHeader className="flex justify-between items-start">
            <div>
              <h1 className="2xl:text-2xl xl:text-lg md:text-base text-sm font-bold text-dark dark:text-light">
                10,105 Pass Generated
              </h1>
              <h1 className="md:text-base text-sm font-medium text-primary dark:text-foreground mt-1">
                3250 Visitors
              </h1>
            </div>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className="capitalize text-dark dark:text-light/70 font-bold"
                  variant="bordered"
                >
                  {selectedValue} Month
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Select a month"
                color="default"
                selectedKeys={selectedKeys}
                selectionMode="single"
                onSelectionChange={(keys: any) => setSelectedKeys(keys)}
              >
                {months &&
                  months?.map((month) => (
                    <DropdownItem key={month.key}>{month.value}</DropdownItem>
                  ))}
              </DropdownMenu>
            </Dropdown>
          </CardHeader>
          <CardBody>
            <Suspense fallback={<Loading />}>
              <SimpleAreaChart
                color={theme === "light" ? "#4136A9" : "#7F94F0"}
                data={chartData ? chartData?.slice(0, parseInt(selectedValue)) : []}
                dataKey="budget"
              />
            </Suspense>
          </CardBody>
        </Card>
        <Card className="md:p-5 p-1">
          <CardBody>
            <Suspense fallback={<Loading />}>
              <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 w-full h-full mx-auto my-auto">
                {dashboardInfo &&
                  dashboardInfo?.map(({icon, name, value}, index) => (
                    <div
                      key={index + 1}
                      className="border-2 rounded-xl border-foreground/30 p-3 w-full h-full"
                    >
                      <h1 className="2xl:text-2xl xl:text-lg md:text-base text-sm font-bold text-dark dark:text-light">
                        {name}
                      </h1>
                      <div className="flex justify-between items-center xl:mt-16 mt-10">
                        <Icon
                          className="bg-foreground/30 text-primary dark:text-foreground rounded-full p-3"
                          height={72}
                          icon={icon}
                          width={72}
                        />
                        <p className="2xl:text-2xl xl:text-lg md:text-base text-sm font-bold text-dark dark:text-light">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </Suspense>
          </CardBody>
        </Card>
        <Card className="md:p-5 p-1">
          <CardHeader className="flex justify-between items-start">
            <div>
              <h1 className="2xl:text-2xl xl:text-lg md:text-base text-sm font-bold text-dark dark:text-light">
                Top Companies
              </h1>
              <h1 className="md:text-base text-sm font-medium text-primary dark:text-foreground mt-1">
                100 Companies
              </h1>
            </div>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className="capitalize text-dark dark:text-light/70 font-bold"
                  variant="bordered"
                >
                  {selectedValue} Month
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Select a month"
                color="default"
                selectedKeys={selectedKeys}
                selectionMode="single"
                onSelectionChange={(keys: any) => setSelectedKeys(keys)}
              >
                {months &&
                  months?.map((month) => (
                    <DropdownItem key={month.key}>{month.value}</DropdownItem>
                  ))}
              </DropdownMenu>
            </Dropdown>
          </CardHeader>
          <CardBody>
            <Suspense fallback={<Loading />}>
              <SimpleBarChart
                colors={theme === "light" ? ["#8d7fcb"] : ["#56629b"] ?? []}
                data={chartData ? chartData?.slice(0, parseInt(selectedValue)) : []}
                dataKeys={["budget"] ?? []}
              />
            </Suspense>
          </CardBody>
        </Card>
        <Card className="md:p-5 p-1">
          <CardHeader className="flex justify-between items-start">
            <div>
              <h1 className="2xl:text-2xl xl:text-lg md:text-base text-sm font-bold text-dark dark:text-light">
                Passes Issues By Time
              </h1>
              <h1 className="md:text-base text-sm font-medium text-primary dark:text-foreground mt-1">
                100 Companies
              </h1>
            </div>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className="capitalize text-dark dark:text-light/70 font-bold"
                  variant="bordered"
                >
                  {selectedValue} Month
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Select a month"
                color="default"
                selectedKeys={selectedKeys}
                selectionMode="single"
                onSelectionChange={(keys: any) => setSelectedKeys(keys)}
              >
                {months &&
                  months?.map((month) => (
                    <DropdownItem key={month.key}>{month.value}</DropdownItem>
                  ))}
              </DropdownMenu>
            </Dropdown>
          </CardHeader>
          <CardBody>
            <Suspense fallback={<Loading />}>
              <SimpleBarChart
                colors={["#4136A9", "#A93641"] ?? []}
                data={chartData ? chartData?.slice(0, parseInt(selectedValue)) : []}
                dataKeys={["morning", "evening"] ?? []}
              />
            </Suspense>
          </CardBody>
        </Card>
      </section>
    </div>
  );
};

export default UserDashboard;
