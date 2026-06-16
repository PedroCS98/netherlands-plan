// === OPENING AND CLOSING MODAL ===

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
const phaseCards = document.querySelectorAll(".phase-card");

for (let i = 0; i<phaseCards.length; i++) {
    phaseCards[i].addEventListener("click", () => {
        modal.classList.add("open");
    });
};

modalClose.addEventListener("click", () => {
    modal.classList.remove("open");
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('open');
    }
});

// === MODAL DATA STRUCTURE ===

const phases = {
    1: {
        title: "Phase I — Planning, Savings & Research",

        people: {
            general: [
                "Open a joint savings account",
                "Research the budget we need",
                "Research setup costs and travel costs as a group",
                "Plan travel dates and method",
                "Set a shared savings target and check in monthly",
                "Research target cities — salaries, cost of living, job market per field",
                "Research NL laws: tenant rights, employment contracts, BSN process, health insurance",
                "Start cutting unnecessary expenses and saving aggressively",
                "Otis: Finish MasterD Full Stack course",
                "Valter: Research cat transport regulations for flights to NL"
            ],
            Otis: [
                "Research rent + deposit budget for a 4-bedroom in target cities",
                "Finish MasterD Full Stack course",
                "Build 3 polished portfolio projects (deploy them, write READMEs)",
                "Stay active on GitHub — consistent commits, public repos",
                "Start Dutch seriously (Pimsleur, Babbel, or iTalki tutor)",
                "Research junior dev salaries in NL by city (Glassdoor, Levels.fyi, LinkedIn)"
            ],
            Valter: [
                "Research utilities budget per city",
                "Research cat transport regulations for flights to NL",
                "Contact a vet about EU pet passport and required vaccinations",
                "Look into industrial mechanic job market in NL"
            ],
            Rafa: [
                "Research transport budget: OV-chipkaart costs, bike prices, city transport options",
                "Get Certificate of Secondary Education sorted",
                "Research forklift certification options in Portugal and NL transfer",
                "Start Driver's License process",
                "Research logistics salaries and hiring demand by Dutch city"
            ],
            Nuno: [
                "Research food and grocery budget in NL by city",
                "Start Driver's License process",
                "Research mechatronic/assembly roles in NL",
                "Start looking into PLC or other certifications",
                "Check if Autoeuropa experience and mechatronic cert are recognized in NL"
            ]
        },

        summary: {
            Otis: 6,
            Valter: 4,
            Rafa: 5,
            Nuno: 5
        }
    },

    2: {
        title: "Phase II - CVs, Jobs & Housing",

        people: {
            general: [
                "CV is polished for everyone",
                "Look for houses to rent",
                "Apply for jobs",
                "Narrow down target cities",
                "Research what a typical Dutch employment contract looks like",
                "Get documents needed (ID, Passport, Driver's License)",
                "Otis: Finish MasterD certification and get on LinkedIn",
                "Valter: Start applying to direct contracts in NL manufacturing"
            ],
            Otis: [
                "Finish MasterD course and get certification",
                "Get a local job in Portugal — even part-time, to pad savings",
                "Polish CV and LinkedIn — highlight projects, GitHub, stack",
                "Start applying to junior dev / trainee roles in NL",
                "Set up job alerts on LinkedIn, Indeed NL, Werkzoeken, Jobbird",
                "Keep pushing Dutch — aim for basic conversational level"
            ],
            Valter: [
                "Prepare CV — emphasize 9 years industrial experience and certifications",
                "Actively apply to direct contracts in manufacturing and logistics",
                "Avoid agencies where possible — research which NL companies hire directly",
                "Finalize cat transport logistics — vet appointments, airline bookings, carrier purchase"
            ],
            Rafa: [
                "Polish CV with logistics and warehousing focus",
                "Complete or schedule forklift/admin certification",
                "Apply to warehousing and logistics companies (DHL, Amazon, Bol.com)"
            ],
            Nuno: [
                "Polish CV — highlight mechatronic cert, PLC if completed, Autoeuropa experience",
                "Apply to manufacturing and tech-industrial roles (Eindhoven region)",
                "Research whether Portuguese qualifications need formal recognition in NL",
                "Look into whether credentials need apostille or official translation"
            ]
        },

        summary: {
            Otis: 6,
            Valter: 4,
            Rafael: 3,
            Nuno: 4
        }
    },

    3: {
        title: "Phase III - Prepare to Move",

        people: {
            general: [
                "Book travel",
                "At least 1–2 people should have confirmed job offers or strong interview pipeline",
                "City decided",
                "Home secured",
                "Otis: Portfolio fully presentable, no half-finished projects",
                "Valter: All cat documentation finalized and ready"
            ],
            Otis: [
                "If no offer yet — double down on applications, reach out directly on LinkedIn",
                "Finalize portfolio — fully presentable, no half-finished projects",
                "Prep for technical interviews: LeetCode basics, portfolio walkthroughs",
                "Dutch: push toward A2, practice listening (Dutch YouTube, podcasts)"
            ],
            Valter: [
                "All cat documentation finalized (EU pet passport, vet certificates, airline approval)",
                "Confirm job situation — at least interviews underway",
                "Make sure housing search accounts for cats — filter pet-friendly landlords early"
            ],
            Rafa: [
                "Forklift/admin certification completed and documented",
                "Confirm job situation",
                "Research OV-chipkaart setup and cycling options in target city"
            ],
            Nuno: [
                "Any planned certifications (PLC, etc.) completed",
                "Confirm job situation",
                "Apostille or translations sorted if any employer flagged it"
            ]
        },

        summary: {
            Otis: 4,
            Valter: 3,
            Rafa: 3,
            Nuno: 3
        }
    },

    4: {
        title: "Phase IV - We Arrived! - Set Up",

        people: {
            general: [
                "Do personal quests",
                "Move together — coordinate arrivals so nobody is stranded at Schiphol with 17 bags and no plan",
                "Register at municipality (gemeente) → get BSN numbers (house contract needed)",
                "Get Dutch SIM cards (Lebara and Odido are popular and affordable)",
                "Open Dutch bank accounts (ING, ABN AMRO, or Bunq as a quick starter)",
                "Set up OV-chipkaart and/or buy bikes — yes, you will become cyclists, resistance is futile",
                "Get health insurance — mandatory, do this within 4 months of registering (Zilveren Kruis, CZ, Menzis)",
                "Get clothes (not in budget)",
                "Register at the Portuguese Embassy in The Hague — so someone knows you exist"
            ],
            Otis: ["Find the local chess club. This is not optional. This is identity"],
            Valter: ["Locate the nearest MTG shop. Bonus points if they run Friday Night Magic"],
            Rafa: ["Scout group activities — he is now Social Secretary whether he likes it or not"],
            Nuno: ["Organize a housewarming party. This is his first and most important Dutch assignment"]
        },

        summary: {
            Otis: 1,
            Valter: 1,
            Rafa: 1,
            Nuno: 1
        }
    }
};