import React from "react";
import { StyledTable } from "./styles";

export function TableAssets() : React.ReactElement {

    return <StyledTable>
        <thead>
        <td></td>
        <td>Asset</td>
        <td>OnChain</td>
        <td>L2 Chain</td>
        <td></td>
        <td></td>

        </thead>
        <tr>
            <td></td>
            <td>Ethereum</td>
            <td>0</td>
            <td>0</td>
            <td>Move</td>
            <td>Move back</td>
        </tr>
    </StyledTable>
}
