const docx = require('docx');
const {
    Document,
    AlignmentType,
    HorizontalPositionAlign,
    HorizontalPositionRelativeFrom,
    ImageRun,
    Media,
    Packer,
    Paragraph,
    VerticalPositionAlign,
    VerticalPositionRelativeFrom,
    TextRun,
    SectionType
} = docx;
const fs = require('fs');
const moment = require('moment')
const { exec } = require('child_process');
const uploadSingleFile = require('./upload');
const sendMail = require('./mailgun');
const processingData = (data) => {
    const doc = new Document({
        sections: [{
            properties: {
                page: {
                    size: {
                        width : 12240, // 21.59cm
                        height: 15840, // 27.94cm
                    },
                },
            },
            children: [   
                new Paragraph({
                    spacing: {
                        after: 240,
                        line: 1.15 * 240
                    },
                    alignment: AlignmentType.CENTER,
                    children: [
                        new TextRun({
                            text: "PURCHASE CONTRACT AND ESCROW INSTRUCTIONS",
                            bold: true,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                // new Paragraph({
                //     alignment: AlignmentType.LEFT,
                //     children: [
    
    
                //     ],
                // }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: {
                        line: 1.15 * 240,
                        after: 240,
                        before: 240,
                    },
                    children: [
                        new TextRun({
                            text: "THIS PURCHASE CONTRACT AND ESCROW INSTRUCTIONS ",
                            bold: true,
                            font: 'Arial',
                            size: 28,
                        }),
                        new TextRun({
                            text: "(“Contract”), is effective as of the latest date it is executed by the Parties (the “Effective Date”), and comprises the entire contract and agreement between Seller (defined in Section 1.9 below) and Buyer (defined in Section 1.9 below) (collectively “Parties”).",
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "1. BASIC TERMS.",
                            font: 'Arial',
                            size: 28,
                            bold: true
                        }),
                        new TextRun({
                            text: " Section 1 defines the Basic Terms of this Contract.",
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "1.0 Property Address:", // Update address later
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: `1.1 Purchase Price: $${data.offerPrice}`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "APN: ",
                            font: 'Arial',
                            size: 28,
                        }),
                        new TextRun({
                            text: "___________________________________________________",
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "1.2 Legal Description: ",
                            font: 'Arial',
                            size: 28,
                            bold: true,
                        }),
                        new TextRun({
                            text: "As stated in the Commitment to be provided by Escrow Agent.",
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "1.3 The Property: ",
                            font: 'Arial',
                            size: 28,
                            bold: true,
                        }),
                        new TextRun({
                            text: "The real property described in Sections 1.1 and 1.2 together with all improvements, fixtures, and appurtenances thereon incidental thereto, plus the personal property described in Section ",
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "1.4 Earnest Money: ",
                            font: 'Arial',
                            size: 28,
                            bold: true,
                        }),
                        new TextRun({
                            text: `$500 (the "Deposit")`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "1.5 Close of Escrow ",
                            font: 'Arial',
                            bold: true,
                            size: 28,
                        }),
                        new TextRun({
                            text: "(“COE”): 30 days from date of execution of this agreement",
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "1.6 Inspection Period: ",
                            font: 'Arial',
                            bold: true,
                            size: 28,
                        }),
                        new TextRun({
                            text: "12 days",
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "1.7 Closing Amounts ",
                            font: 'Arial',
                            size: 28,
                            bold: true,
                        }),
                        new TextRun({
                            text: "to be paid as follows:",
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "1.8 Personal property ",
                            font: 'Arial',
                            size: 28,
                            bold: true,
                        }),
                        new TextRun({
                            text: "to be included in the sale includes all items attached and affixed to the Property as of the Effective Date and the following:",
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "1.9 Additional Terms and Conditions:",
                            font: 'Arial',
                            size: 28,
                            bold: true,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "2. PURCHASE AND SALE OF PROPERTY. ",
                            font: 'Arial',
                            bold: true,
                            size: 28,
                        }),
                        new TextRun({
                            text: "For the Purchase Price and in accordance with the terms and conditions set forth in this Contract, Seller agrees to sell, and Buyer agrees to buy the Property identified in Section 1.3. The Deposit shall be credited toward the Purchase Price at COE.",
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "3. STATUS OF TITLE. ",
                            font: 'Arial',
                            bold: true,
                            size: 28,
                        }),
                        new TextRun({
                            text: `As soon as practical following the Effective Date, Escrow Agent shall cause a current commitment for an ALTA Owner’s Policy of Title Insurance (the "Commitment") to be issued and delivered to Seller and Buyer. Buyer and Seller shall satisfy their respective requirements to closing set forth in the Commitment prior to COE. Seller shall remove all liens, clouds, and encumbrances at or prior to COE.`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "4. INSPECTION OF AND ACCESS TO THE PROPERTY. ",
                            font: 'Arial',
                            bold: true,
                            size: 28,
                        }),
                        new TextRun({
                            text: "Buyer, in Buyer’s sole and absolute discretion, may through written notice to Seller, cancel this Contract during the Inspection Period set forth in Section 1.10 and obtain a return of the Deposit and any other items or things of value given by Buyer to Seller. From the Effective Date through COE, Seller shall provide access to the Property to Buyer, and will make the Property reasonably available to Buyer and to Buyer’s assignees, prospective assignees, agents, representatives, inspectors and authorized individuals to conduct inspections and walkthrough(s) of the Property.",
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "5. INSTRUCTION TO RELEASE THE DEPOSIT UPON CANCELLATION DURING THE INSPECTION PERIOD. ",
                            font: 'Arial',
                            size: 28,
                            bold: true,
                        }),
                        new TextRun({
                            text: "Seller hereby irrevocably instructs Escrow Agent to return the Deposit to Buyer, or to any person or entity designated by Buyer to receive the Deposit, if Buyer elects to cancel this Contract during the Inspection Period and no further written instructions are required for Escrow Agent to release the Deposit to Buyer or to any person or entity designated by Buyer to receive the Deposit. Seller hereby waives any rights under state or other law to object to the release of the Deposit if this Contract is canceled by Buyer during the Inspection Period and waives any right to provide any additional written consent to the release of the Deposit if this Contract is canceled by the Buyer during the Inspection Period.",
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "6. LEAD-BASED PAINT DISCLOSURE. ",
                            font: 'Arial',
                            bold: true,
                            size: 28,
                        }),
                        new TextRun({
                            text: "If the home on the Property was built before 1978, Seller shall notify Buyer of any known lead-based paint (“LBP”) or LBP hazards on the Property and provide Buyer with any LBP risk assessments or inspections in Seller’s possession. Buyer agrees to review the “Lead Warning Statement” found in the Disclosure of Information on Lead-Based Paint and/or Lead-Based Paint Hazards found at https://www.epa.gov/sites/production/files/documents/selr_eng.pdf and the pamphlet “Protect Your Family from Lead in Your Home” found at https://www.epa.gov/lead/protect-your-family-lead-your-home-real-estate-disclosure, which are incorporated herein by this reference. Buyer waives the ten (10) day opportunity to conduct a lead-based paint inspection and risk assessment.",
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "7. AS IS PURCHASE; EXISTING CONDITION AS OF COE. ",
                            font: 'Arial',
                            size: 28,
                            bold: true,
                        }),
                        new TextRun({
                            text: `Buyer is purchasing the Property "AS IS" and in the condition existing as of the Effective Date. The Property shall be delivered to Buyer at COE in substantially the same condition existing as of the Effective Date. In the event of loss of or damage to the Property, or a portion thereof, prior to the Closing, Buyer may terminate this Contract and the Deposit, and any other items or things of value given by Buyer to Seller will be refunded to Buyer.`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "8. ESCROW; COE; CLOSING COSTS AND PRORATIONS. ",
                            font: 'Arial',
                            size: 28,
                            bold: true,
                        }),
                        new TextRun({
                            text: `Seller and Buyer engage Escrow Agent to act as the escrow agent for the closing of the transactions contemplated by this Contract. Title will be transferred by general warranty deed. Buyer and Seller shall execute all documents and perform all other acts Escrow Agent reasonably requires to close escrow on or before the COE date set forth in Section 1.6. All real estate taxes, rents, and assessments shall be prorated as of COE. The Parties shall pay the specific closing costs applicable to them as set forth in Section 1.11.`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "9. CURE NOTICE; REMEDIES; ATTORNEYS’ FEES. ",
                            font: 'Arial',
                            size: 28,
                            bold: true,
                        }),
                        new TextRun({
                            text: `If a party fails to comply or perform under this Contract, the other party shall deliver a notice to the breaching party specifying the non-compliance (the “Cure Notice”). If the non-compliance is not cured within ten (10) calendar days after receipt of the Cure Notice (the “Cure Period”), the failure to comply shall become a breach of this Contract. A Cure Notice is not required upon Seller indicating an intention to or refusing to close escrow by the COE date. If Seller shall breach any of the terms or provisions of this Contract, Buyer may proceed against Seller for any claim or remedy the Buyer may have in law or equity, which includes, but is not limited to, specific performance and damages. If Buyer breaches this Contract, Seller accepts the Deposit as Seller’s sole right to damages. The prevailing party in any lawsuit arising out of or to enforce this Contract shall be awarded its reasonable attorneys’ fees, expert fees and costs incurred prior to and/or after the filing of such lawsuit. Any attorneys' fees awarded in favor of Buyer may be paid to Buyer from the proceeds of the closing of the transaction contemplated by this Contract.`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "10. NO ORAL CHANGES OR REPRESENTATIONS. ",
                            font: 'Arial',
                            size: 28,
                            bold: true,
                        }),
                        new TextRun({
                            text: `EACH PARTY ACKNOWLEDGES THAT SUCH PARTY HAS NOT RELIED ON ANY ORAL CONTRACT, STATEMENT, REPRESENTATION OR OTHER PROMISE THAT IS NOT EXPRESSED IN WRITING IN THIS CONTRACT. This Contract may be amended or modified only by an agreement in writing signed by Buyer and Seller.`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "11. NOTICES. ",
                            font: 'Arial',
                            size: 28,
                            bold: true,
                        }),
                        new TextRun({
                            text: `Any and all notices, demands or requests required or permitted hereunder shall be in writing and shall be effective upon personal delivery, electronic mail, or upon receipt, if deposited in the U.S. Mail, registered or certified, return receipt requested, postage prepaid, or if deposited with any commercial air courier or express service.`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: "12. MISCELLANEOUS.",
                            font: 'Arial',
                            size: 28,
                            bold: true,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: `12.1. Addendum, Acknowledgements, and Additional Terms and Conditions. The Parties agree to be bound by the additional terms and conditions specified in Section 1.13 and if such additional terms and conditions conflict with any other provision of this Contract, the terms and conditions set forth in Section 1.13 shall control.`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: `12.2. Buyer's Marketing of its Contract Interest. Buyer has the right to market its contract interest in the Property in Buyer's sole discretion, which may include, but is not limited to listing the Property and Buyer's contract interest in the Property on any Multiple Listing Service ("MLS"). Seller, hereby appoints Buyer as its attorney in fact with the full power and authority to act in the name and place of Seller for the execution of any and all documents necessary to list the Property and Buyer's contract interest in the Property on the MLS.`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: `12.1. Addendum, Acknowledgements, and Additional Terms and Conditions. The Parties agree to be bound by the additional terms and conditions specified in Section 1.13 and if such additional terms and conditions conflict with any other provision of this Contract, the terms and conditions set forth in Section 1.13 shall control.
                            `,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: `12.3. Time is of the Essence. Time is of the essence with respect to the performance of all terms, conditions and provisions of this Contract.`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: `12.4. Choice of Law. This Contract shall be governed and enforced under the laws of the state where the Property is located without regard to any conflict of law provisions.`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: `12.5. Memorandum of Contract. Seller agrees that Buyer may execute, acknowledge, and record a memorandum or affidavit of this Contract in the official records of the recorder of the county in which the Property is located. Seller’s signature on any affidavit or memorandum is not required for the recording of the same.`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: `12.6. Electronic Execution and Counterparts. This Contract may be executed by electronic means and in any number of counterparts, each of which shall be deemed an original and all of which when taken together shall constitute one instrument.`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: `Buyer to pay all escrow fees, title policy, owners policy, and HOA fees to close. These costs do not include back-due fees, violation fees, notary fees, liens, or commissions.`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: `Any time periods or dates in this contract that end or occur on a Saturday, Sunday, or national legal public holiday shall extend to the next business day.`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: `Seller acknowledges and agrees that Seller has read and fully understands the terms and conditions of this Contract and is entering into this Contract voluntarily and has not been threatened, coerced, or intimidated into signing this Contract.`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [],
                }),
    
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: `Signatures`,
                            font: 'Arial',
                            bold: true,
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: `ACCEPTED BY SELLER on`,
                            font: 'Arial',
                            bold: true,
                            size: 28,
                        }),
                        new TextRun({
                            text: `_______________________________`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: `SELLER (print and sign name)`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: `_______________________________________________________`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: `ACCEPTED BY BUYER on `,
                            font: 'Arial',
                            bold: true,
                            size: 28,
                        }),
                        new TextRun({
                            text: `${moment().format('MMMM Do YYYY')}`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: `BUYER (print and sign name)`,
                            font: 'Arial',
                            size: 28,
                        })
                    ],
                }),
                new Paragraph({
                    children: [],  // Just newline without text
                }),
                // new ImageRun({
                //     data: fs.readFileSync("./sign.png"),
                //     transformation: {
                //         width: 100,
                //         height: 100,
                //     },
                // }),
                new Paragraph({
                    children: [
                        new ImageRun({
                            data: fs.readFileSync("./sign.png"),
                            transformation: {
                                width: 152,
                                height: 44,
                            },
                        })
                    ],  // Just newline without text
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    children: [
                        new TextRun({
                            text: `Ashan Dezoysa \n`,
                            font: 'Arial',
                            size: 28,
                        }),
                        new TextRun({
                            text: `President, Future Builders LLC \n`,
                            font: 'Arial',
                            size: 28,
                            break: 1,
                        }),
                        new TextRun({
                            text: `5753 Highway 85 N, #73-78, Crestview, FL, 32536`,
                            font: 'Arial',
                            break: 1,
                            size: 28,
                        })
                    ],
                }),
            ],
        }],
    });
    
    const filename = `psa` // Update filename later
    Packer.toBuffer(doc).then(data => {
        fs.writeFileSync(`./${filename}.docx`, data)
        exec(`soffice --convert-to pdf ${filename}.docx --headless`, (err, stdout, stderr) => {
            if (err) {
              // node couldn't execute the command
              console.log("ERROR==============");
              console.log(err);
              return;
            }
          
            // the *entire* stdout and stderr (buffered)
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            uploadSingleFile(`${filename}.pdf`, `./${filename}.pdf`)
            sendMail(`${filename}.pdf`)
          });
    });
}
module.exports = processingData;