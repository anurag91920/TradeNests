import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extended-expect";
import Hero from "../Landing_page/Home/Hero";

describe("Hero Component", () => {
    test("renders hero image", () => {
        render(<Hero />);
        const heroImage = screen.getAllByAltText("Hero Image");
        expect(heroImage).toBeIntheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/HomeHero.png");
    });
});