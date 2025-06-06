import React from 'react';

function HeroComponent() {
    return (
        <div className="relative isolate">
            <div className="overflow-hidden bg-gray-900">
                <div className="mx-auto max-w-7xl px-6 pt- pb-4 sm:pt-14 lg:px-8 lg:pt-14">
                    <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                        <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                            <h1 className="text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl">
                                BrainSide Tech
                            </h1>
                            <p className="mt-8 text-left text-lg font-medium text-pretty text-gray-200 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                                En BrainSide Tech somos una empresa especializada en soluciones digitales y tecnológicas
                                que impulsan el crecimiento y profesionalización de negocios de todos los tamaños.

                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Buscar soluciones
                                </a>
                            </div>
                        </div>
                        <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                                <div className="relative">
                                    <img
                                        alt=""
                                        src={require("../img/BrainSideTech_production.jpg")}
                                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                                </div>
                            </div>
                            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                <div className="relative">
                                    <video className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" autoPlay muted loop controls={false} src={require("../img/BrainSideTech_developer.mp4")}></video>
                                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                                </div>
                                <div className="relative">
                                    <img
                                        alt=""
                                        src={require("../img/BrainSideTech_support.jpg")}
                                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />
                                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                                </div>
                            </div>
                            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                <div className="relative">
                                    <img
                                        alt=""
                                        src={require("../img/BrainSideTech_design2.jpg")}
                                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    />

                                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                                </div>
                                <div className="relative">
                                    <video className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" autoPlay muted loop controls={false} src={require("../img/BrainSideTech_drone2.mp4")}></video>
                                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroComponent;