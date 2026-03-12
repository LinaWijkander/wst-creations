import * as S from './styles';
import MenuDropdown from "../../molecules/MenuDropdown";
import {useState, useRef, useEffect} from "react";
import {CustomLink} from "../../atoms/routerLink";



//todo kolla över routerLink och customLink components. Can they be merged?
// instead have a Navbar Item component you can style to take up 100% of parent height & that holds a routerLink

export const NavigationBar = () => {
    const [isDropDownVisible, setDropDownVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setDropDownVisible((v) => !v);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropDownVisible(false);
            }
        };
        if (isDropDownVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isDropDownVisible]);

    return (
        <S.StyledNavbar>
            {/*"/" istf home när satt upp en faktisk hemsida*/}
            <S.StyledTitle href={"/home"}>Home</S.StyledTitle>
            <S.StyledUList>
                <CustomLink to={"/crafters"} dataPath={"crafters"}>Crafters</CustomLink>
                <CustomLink to={"/about"} dataPath={"about"}>About</CustomLink>
                <S.StyledDropdownWrapper ref={dropdownRef}>
                    <S.StyledDropdown onClick={toggleDropdown} $isOpen={isDropDownVisible}>
                        Creations
                    </S.StyledDropdown>
                    {isDropDownVisible && <MenuDropdown />}
                </S.StyledDropdownWrapper>
            </S.StyledUList>
        </S.StyledNavbar>
    )
}