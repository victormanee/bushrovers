import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as BadgeCheck, c as QrCode, f as MapPin, g as Compass, m as HandHeart, o as ShieldCheck, x as Award, y as CalendarDays } from "../_libs/lucide-react.mjs";
import { d as formatDate, f as bush_rovers_logo_default, i as Button, m as recordScan, r as Route$2, s as CREW, u as formatBirthday } from "./router-CKo8QW5k.mjs";
import { r as MemberPhoto, t as Badge } from "./member-card-fXgXoOYk.mjs";
import { t as require_lib } from "../_libs/qrcode.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/members._slug-DgKMYq0E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lib = /* @__PURE__ */ __toESM(require_lib());
function useQrDataUrl(value, size = 512) {
	const [dataUrl, setDataUrl] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		import_lib.toDataURL(value, {
			width: size,
			margin: 1,
			errorCorrectionLevel: "M",
			color: {
				dark: "#12261c",
				light: "#ffffff"
			}
		}).then((url) => {
			if (!cancelled) setDataUrl(url);
		}).catch(() => setDataUrl(null));
		return () => {
			cancelled = true;
		};
	}, [value, size]);
	return dataUrl;
}
function QrImage({ value, size = 256, className = "", alt = "QR code" }) {
	const dataUrl = useQrDataUrl(value, size * 2);
	if (!dataUrl) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `animate-pulse rounded-md bg-secondary ${className}`,
		style: {
			width: size,
			height: size
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: dataUrl,
		alt,
		width: size,
		height: size,
		className: `rounded-md bg-white p-1 ${className}`
	});
}
function MemberProfile() {
	const { member, gallery, achievements, activities, projects } = Route$2.useLoaderData();
	const role = member.roles?.name ?? "Member";
	const active = member.status === "active";
	const profileUrl = typeof window !== "undefined" ? window.location.href : `/members/${member.slug}`;
	const birthday = member.show_birthday ? formatBirthday(member.birth_month, member.birth_day) : null;
	(0, import_react.useEffect)(() => {
		const deviceType = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? "mobile" : "desktop";
		recordScan({ data: {
			memberUuid: member.id,
			source: "profile",
			deviceType
		} });
	}, [member]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-forest-deep topo-texture",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-5xl px-4 py-10 md:py-14 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: bush_rovers_logo_default,
						alt: "Bush Rovers emblem",
						width: 56,
						height: 56,
						className: "h-12 w-12 md:h-14 md:w-14"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl tracking-widest text-cream",
						children: CREW.nameUpper
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-condensed text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground",
						children: "Scout Rover Crew"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-7 sm:flex-row sm:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberPhoto, {
						src: member.photo_url,
						name: member.full_name,
						className: "h-40 w-40 shrink-0 rounded-lg border border-primary/40 md:h-48 md:w-48"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-verified/50 bg-verified/10 px-3 py-1 font-condensed text-xs uppercase tracking-[0.2em] text-verified",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-4 w-4" }), " Verified Bush Rovers member"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 font-condensed text-xs uppercase tracking-[0.2em] text-muted-foreground",
							children: "Inactive member"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-4xl leading-none text-cream md:text-6xl",
							children: member.full_name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-condensed text-xl uppercase tracking-[0.2em] text-primary",
							children: role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 font-condensed text-sm uppercase tracking-[0.18em] text-muted-foreground",
							children: ["Member ID: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-cream",
								children: member.member_id
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-condensed text-sm uppercase tracking-[0.18em] text-muted-foreground",
							children: CREW.motto
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/verify/$memberId",
							params: { memberId: member.member_id },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {}), " Verification page"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/members",
							children: "Other Rovers"
						})
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid w-full max-w-5xl gap-10 px-4 py-14 lg:grid-cols-[1fr_260px] lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "About the member"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-muted-foreground",
					children: member.bio || "[Biography to be added by the crew administrator.]"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Scout role"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-2xl text-cream",
						children: role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 leading-relaxed text-muted-foreground",
						children: member.roles?.description || "[Role description]"
					}),
					member.responsibilities || member.roles?.responsibilities ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 leading-relaxed text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-cream",
							children: "Responsibilities: "
						}), member.responsibilities || member.roles?.responsibilities]
					}) : null
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Scout journey"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Date joined",
							value: formatDate(member.join_date) ?? "[JOIN DATE]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Current section",
							value: member.current_section ?? "[CURRENT SECTION]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Previous section",
							value: member.previous_section ?? "[PREVIOUS SECTION]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Years in Scouting",
							value: member.years_in_scouting ? String(member.years_in_scouting) : "[YEARS]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Scout level",
							value: member.scout_level ?? "[SCOUT LEVEL]"
						}),
						birthday ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Born",
							value: birthday
						}) : null
					]
				})] }),
				member.skills.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Skills"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: member.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						className: "font-condensed uppercase tracking-[0.12em]",
						children: skill
					}, skill))
				})] }) : null,
				member.interests.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Interests"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: member.interests.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "font-condensed uppercase tracking-[0.12em]",
						children: item
					}, item))
				})] }) : null,
				achievements.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Achievements"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-4",
					children: achievements.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "surface-card rounded-lg p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-condensed text-sm uppercase tracking-[0.2em] text-primary",
								children: item.year_label || formatDate(item.event_date) || ""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-xl text-cream",
								children: item.title
							}),
							item.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: item.description
							}) : null
						]
					}, item.id))
				})] }) : null,
				activities.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Activities"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-4 sm:grid-cols-2",
					children: activities.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "surface-card rounded-lg p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg text-cream",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-condensed text-xs uppercase tracking-[0.16em] text-muted-foreground",
							children: [formatDate(item.event_date), item.location].filter(Boolean).join(" · ")
						})]
					}, item.id))
				})] }) : null,
				projects.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Community service"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-4",
					children: projects.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "surface-card rounded-lg p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg text-cream",
								children: item.title
							}),
							item.impact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-primary",
								children: item.impact
							}) : null,
							item.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: item.description
							}) : null
						]
					}, item.id))
				})] }) : null,
				gallery.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Gallery"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3",
					children: gallery.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image_url,
						alt: item.title ?? `${member.full_name} in Scout activity`,
						loading: "lazy",
						className: "surface-card aspect-square rounded-md object-cover"
					}, item.id))
				})] }) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "space-y-6 lg:sticky lg:top-24 lg:self-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card rounded-lg p-5 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Digital badge"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrImage, {
						value: profileUrl,
						size: 180,
						className: "mx-auto mt-4",
						alt: `QR code linking to ${member.full_name}'s Bush Rovers profile`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 font-condensed text-xs uppercase tracking-[0.18em] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "mr-1 inline h-3.5 w-3.5 text-primary" }), "Scan to open this profile"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card rounded-lg p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Crew"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "h-4 w-4 text-primary" }),
								" ",
								CREW.name
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4 text-primary" }),
								"Joined ",
								formatDate(member.join_date) ?? "[JOIN DATE]"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }), " [CREW LOCATION]"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-4 w-4 text-primary" }),
								" ",
								achievements.length,
								" achievements"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandHeart, { className: "h-4 w-4 text-primary" }),
								" ",
								projects.length,
								" service projects"
							]
						})
					]
				})]
			})]
		})]
	})] });
}
function Fact({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface-card rounded-lg p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "font-condensed text-xs uppercase tracking-[0.2em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 text-cream",
			children: value
		})]
	});
}
//#endregion
export { MemberProfile as component };
